"use client";

import { useRouter } from "next/navigation";
import { login } from "../../../services/auth";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAccountStore from "@/store/useAccountStore";

const useLogin = () => {
  const router = useRouter();

  const { setToken, setAccount, setRole } = useAccountStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.message || "Login failed");
      }

      setToken(json.token);
      setAccount(json.user);
      setRole(json.role);


      toast.success(json.message || "Login successful");

      // Redirect based on role
      if (json.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        error instanceof Error ? error.message : "Login failed"
      );
    }
  };

  return {
    handleLogin,
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export default useLogin;