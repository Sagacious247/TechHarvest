"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAdminAuth } from "@/hooks/useAdminAuth";

interface Props {
  children: React.ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: Props) {

  const router = useRouter();

  const {
    loading,
    isAuthenticated,
  } = useAdminAuth();

  useEffect(() => {

    if (!loading && !isAuthenticated) {

      router.replace("/admin/login");

    }

  }, [
    loading,
    isAuthenticated,
    router,
  ]);

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="text-xl font-semibold">

          Loading...

        </div>

      </div>

    );

  }

  if (!isAuthenticated) {

    return null;

  }

  return <>{children}</>;

}