"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { adminStorage } from "@/utils/adminStorage";
import { AdminUser } from "@/types/admin";
import { getAdminProfile } from "@/services/adminAuth.service";

interface AdminAuthContextType {
  admin: AdminUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (
    admin: AdminUser,
    token: string
  ) => void;
  logout: () => void;
}

const AdminAuthContext =
  createContext<AdminAuthContextType | null>(null);

export function AdminAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [admin, setAdmin] =
    useState<AdminUser | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const initialize = async () => {
      const token =
        adminStorage.getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      const cachedAdmin =
        adminStorage.getUser();

      if (cachedAdmin) {
        setAdmin(cachedAdmin);
      }

      try {
      
      const admin = await getAdminProfile();

         setAdmin(admin);

         adminStorage.saveUser(admin);
      } 
      
      catch {

        if (!cachedAdmin) {

          adminStorage.clear();

          setAdmin(null);

        }

      } finally {

        setLoading(false);

      }

    };

    initialize();

  }, []);

  const login = (
    admin: AdminUser,
    token: string
  ) => {

    adminStorage.saveToken(token);

    adminStorage.saveUser(admin);

    setAdmin(admin);

  };

  const logout = () => {

    adminStorage.clear();

    setAdmin(null);

  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        loading,
        isAuthenticated: !!admin,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuthContext() {

  const context =
    useContext(AdminAuthContext);

  if (!context) {

    throw new Error(
      "useAdminAuthContext must be used inside AdminAuthProvider"
    );

  }

  return context;

}