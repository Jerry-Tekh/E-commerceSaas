"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function ForgotPasswordForm({ className, ...props }) {
    return (<div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 dark:text-zinc-100">
          Password Recovery
        </h1>
        <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">
          Email reset is currently unavailable
        </p>
      </div>

      <div className="border border-zinc-200 dark:border-zinc-800 p-6 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-6">
          Password reset links require an email provider. Until one is added,
          sign in with your existing password and change it from account
          settings.
        </p>
      </div>

      <Link href="/sign-in" className="mt-4 group inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-zinc-100 transition-colors duration-300 w-full">
        Back to Sign In
      </Link>
    </div>);
}
