"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { checkProfile } from "@/services/profile";
import useAccountStore from "@/store/useAccountStore";
import BackToLogin from "./BackToLogin";
import Spinner from "@/components/Spinner";

export default function DashboardMiddleware({ children }) {
  const router = useRouter();

  const { token, logout } = useAccountStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const verifyToken = async () => {
      setIsLoading(true);

      const currentToken = useAccountStore.getState().token;

      if (!currentToken) {
        if (!cancelled) {
          setIsAuthorized(false);
          setIsLoading(false);
          router.replace("/");
        }
        return;
      }

      try {
        const res = await checkProfile(currentToken);

        if (cancelled) return;

        if (res.status === 401) {
          logout();
          setIsAuthorized(false);
          toast.error("Your session has expired. Please log in again.");
          router.replace("/");
          return;
        }

        if (!res.ok) {
          setIsAuthorized(false);
          toast.error("Unable to verify your session.");
          return;
        }

        setIsAuthorized(true);
      } catch (error) {
        if (!cancelled) {
          console.error("Profile verification failed:", error);
          setIsAuthorized(false);
          toast.error("Unable to verify your session.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    verifyToken();

    return () => {
      cancelled = true;
    };
  }, [token, logout, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthorized || !token) {
    return <BackToLogin />;
  }

  return <>{children}</>;
}