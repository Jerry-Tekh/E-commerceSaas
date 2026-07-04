import db from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { captcha } from "better-auth/plugins";
export const auth = betterAuth({
    plugins: [
        ...(process.env.NODE_ENV === "production"
            ? [
                captcha({
                    provider: "cloudflare-turnstile",
                    secretKey: process.env.TURNSTILE_SECRET_KEY,
                }),
            ]
            : []),
    ],
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        autoSignIn: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    user: {
        additionalFields: {
            role: {
                type: "string",
                default: "USER",
            },
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
        },
    },
    rateLimit: {
        customRules: {
            "/forget-password": { window: 10, max: 3 },
            "/sign-up": {
                window: 10,
                max: 3,
            },
        },
    },
    logger: {
        level: "debug",
        log(level, message, ...args) {
            console.log(level, message, ...args);
        },
    },
});
