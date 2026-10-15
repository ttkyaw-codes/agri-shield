
"use client"

import React from "react"

const LoginForm = () => {
  return (
    <form className="space-y-6">
      {/* Email */}
      <div className="flex flex-col gap-2.5">
        <label
          htmlFor="email"
          className="block font-medium"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          required
          className="h-10 w-full rounded-md border border-slate-600 px-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2.5">
        <label
          htmlFor="password"
          className="block font-medium"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          className="h-10 w-full rounded-md border border-slate-600 px-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-5 py-2 text-primary-foreground"
      >
        Continue
      </button>
    </form>
  )
}

export default LoginForm
