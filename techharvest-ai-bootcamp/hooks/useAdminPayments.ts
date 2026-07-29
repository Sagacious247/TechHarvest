"use client";

import { useEffect, useState } from "react";

import { getAdminPayments } from "@/services/adminPaymentApi";

import { AdminPayment } from "@/types/payment";

export function useAdminPayments() {

  const [payments, setPayments] =
    useState<AdminPayment[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadPayments() {

    try {

      setLoading(true);

      const data =
        await getAdminPayments();

      setPayments(data);

    } catch (err: any) {

      setError(
        err?.response?.data?.message ??
        "Unable to load payments."
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadPayments();

  }, []);

  return {

    payments,

    loading,

    error,

    refreshPayments: loadPayments,

  };

}