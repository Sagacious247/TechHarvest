"use client";

import { useEffect, useState } from "react";

import {

  getPaymentHistory,

  PaymentHistory,

} from "@/services/paymentHistory.service";

export function usePaymentHistory() {

  const [payments, setPayments] =
    useState<PaymentHistory[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    try {

      const data =
        await getPaymentHistory();

      setPayments(data);

    } finally {

      setLoading(false);

    }

  }

  return {

    payments,

    loading,

  };

}