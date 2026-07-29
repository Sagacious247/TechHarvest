"use client";

import { useAdminAuth } from "./useAdminAuth";

export function useAdmin() {
    const { admin } = useAdminAuth();

    return admin;
}