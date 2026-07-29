"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { storage } from "@/utils/storage";
import { User } from "@/types/auth";
import { getStudentProfile } from "@/lib/api";

interface AuthContextType {

  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

  login: (
    user: User,
    token: string
  ) => void;

  logout: () => void;

}

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const initializeAuth = async () => {

      const token =
        storage.getToken();

      if (!token) {

        setLoading(false);

        return;

      }

       /**
     * Load cached user immediately
     */
    const cachedUser = storage.getUser();

    if (cachedUser) {

      setUser(cachedUser);

    }

      try {

        const response =
          await getStudentProfile();

        setUser(response.user);

        storage.saveUser(
          response.user
        );

      } catch {

        if(!cachedUser) {

          storage.clear();
  
          setUser(null);
        }

      } finally {

        setLoading(false);

      }

    };

    initializeAuth();

  }, []);

  const login = (
    user: User,
    token: string
  ) => {

    storage.saveToken(token);

    storage.saveUser(user);

    setUser(user);

  };

  const logout = () => {

    storage.clear();

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated:
          !!user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuthContext() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );

  }

  return context;

}