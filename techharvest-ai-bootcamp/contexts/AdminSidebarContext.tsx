"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface SidebarContextType {
  open: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const SidebarContext =
  createContext<SidebarContextType | null>(null);

export function AdminSidebarProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [open, setOpen] =
    useState(false);

  return (
    <SidebarContext.Provider
      value={{
        open,
        openSidebar: () => setOpen(true),
        closeSidebar: () => setOpen(false),
        toggleSidebar: () =>
          setOpen((prev) => !prev),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useAdminSidebar() {

  const context =
    useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useAdminSidebar must be used inside AdminSidebarProvider"
    );
  }

  return context;
}
