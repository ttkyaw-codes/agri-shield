"use client";

import React from "react";
import useLogin from "../hooks/uselogin";

const LoginForm = () => {
  const {
    handleLogin,
    handleSubmit,
    register,
    isSubmitting,
    errors,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="space-y-6"
    >
      {/* Email */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="email" className="block font-medium">
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email is required",
          })}
          className="h-10 w-full rounded-md border border-slate-600 px-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="password" className="block font-medium">
          Password
        </label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
          })}
          className="h-10 w-full rounded-md border border-slate-600 px-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-5 py-2 text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Signing in..." : "Continue"}
      </button>
    </form>
  );
};

export default LoginForm;