"use client";

import { useEffect, useState } from "react";

import { getAdminCertificates } from "@/services/adminCertificate.service";
import { AdminCertificate } from "@/types/certificate";

export function useAdminCertificates() {

  const [certificates, setCertificates] =
    useState<AdminCertificate[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadCertificates();

  }, []);

  async function loadCertificates() {

    try {

      const data =
        await getAdminCertificates();

      setCertificates(data);

    } finally {

      setLoading(false);

    }

  }

  return {

    certificates,

    loading,

    refresh: loadCertificates,

  };

}