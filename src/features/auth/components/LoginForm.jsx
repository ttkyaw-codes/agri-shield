
"use client"
import React from 'react'
const LoginForm = () => {
  return (
  <form className="space-y-6">
    <div className="flex flex-col gap-2.5">
      <label htmlFor="phone" className="block">
        Phone Number
      </label>
      <div className="flex h-10 w-100 overflow-hidden  border border-slate-600">
        <div className="flex items-center gap-2 border-r px-3">
          <span className="text-xl">🇲🇲</span>
          <span className="text-sm text-slate-600">+95</span>
        </div>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          placeholder="9xxxxxxxxx"
          maxLength={9}
          pattern="9[0-9]{8}"
          required
          className="w-full px-3 outline-none"
        />
      </div>
    </div>

    <button
      type="submit"
      className="bg-primary w-100 text-primary-foreground rounded-md px-5 py-2"
    >
      Continue
    </button>
  </form>
  )
}

export default LoginForm