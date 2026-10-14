"use client"
import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';
import Link from "next/link"

const VerifyOtpSection = ({ email = "user@example.com", onSubmit }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isResending, setIsResending] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleResend = async () => {
    setIsResending(true);
    console.log("Resending code...");

    // Reset timer
    setTimeLeft(120);
    setIsResending(false);
  };

  // OTP Input Auto-focus & Control Logic
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow numbers only

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).replace(/\D/g, '');
    if (!pastedData) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, idx) => {
      if (idx < 6) newOtp[idx] = char;
    });
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (onSubmit) {
      onSubmit(otpCode);
    } else {
      console.log("Submitted OTP:", otpCode);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6 space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="space-y-1 sm:space-y-1.5 text-left">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
          Verify your login
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 break-words">
            
          <span className="font-medium text-gray-900 break-all">{email}</span>.
        </p>
      </div>

      {/* Content Body */}
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid gap-3 sm:gap-4">
          {/* Label + Resend Action */}
          <div className="flex flex-row items-center justify-between gap-2">
            <label htmlFor="otp-input-0" className="text-xs sm:text-sm font-medium text-gray-700 shrink-0">
              Verification code
            </label>
            <button
              type="button"
              onClick={handleResend}
              disabled={timeLeft > 0 || isResending}
              className="inline-flex items-center gap-1.5 h-8 px-2.5 sm:px-3 text-[11px] sm:text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <RefreshCw className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isResending ? "animate-spin" : ""}`} />
              {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : "Resend Code"}
            </button>
          </div>
        
          {/* Responsive OTP Input Fields */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 w-full overflow-x-auto py-1" onPaste={handlePaste}>
            {/* Group 1 */}
            <div className="flex gap-1 sm:gap-1.5">
              {[0, 1, 2].map((i) => (
                <input
                  key={i}
                  id={`otp-input-${i}`}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-9 h-10 sm:w-11 sm:h-12 text-center text-lg sm:text-xl font-bold border border-gray-300 rounded-md bg-white text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                />
              ))}
            </div>

            {/* Separator */}
            <div className="w-1.5 sm:w-2 h-0.5 bg-gray-300 mx-0.5 sm:mx-1 rounded-full shrink-0" />

            {/* Group 2 */}
            <div className="flex gap-1 sm:gap-1.5">
              {[3, 4, 5].map((i) => (
                <input
                  key={i}
                  id={`otp-input-${i}`}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-9 h-10 sm:w-11 sm:h-12 text-center text-lg sm:text-xl font-bold border border-gray-300 rounded-md bg-white text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                />
              ))}
            </div>
          </div>
        
          <p className="text-xs sm:text-sm text-gray-500">
            <Link href={"/"} className="hover:underline">
              I no longer have access to phone number.
            </Link>
          </p>
        </div>

        {/* Footer Actions */}
        <div className="grid w-full gap-3 sm:gap-4">
          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm sm:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtpSection;