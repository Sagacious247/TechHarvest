"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {

  const router = useRouter();

  const {
    loading,
    isAuthenticated,
  } = useAuth();

  useEffect(() => {

    if (
      !loading &&
      !isAuthenticated
    ) {

      router.replace("/login");

    }

  }, [
    loading,
    isAuthenticated,
    router,
  ]);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <p className="text-lg font-semibold">
          Loading...
        </p>

      </div>
    );

  }

  if (!isAuthenticated) {

    return null;

  }

  return <>{children}</>;
}