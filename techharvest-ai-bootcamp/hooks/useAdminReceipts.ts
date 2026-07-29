"use client";

import { useEffect, useState } from "react";

import { getAdminReceipts } from "@/services/adminReceiptApi";
import { AdminReceipt } from "@/types/receipt";

export function useAdminReceipts() {

  const [receipts, setReceipts] =
    useState<AdminReceipt[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadReceipts() {

    try {

      const data =
        await getAdminReceipts();

      setReceipts(data);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadReceipts();

  }, []);

  return {

    receipts,

    loading,

    refresh: loadReceipts,

  };

}