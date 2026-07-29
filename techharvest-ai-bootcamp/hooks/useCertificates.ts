"use client";

import { useEffect, useState } from "react";

import {
  Certificate,
  getMyCertificates,
} from "@/services/certificate.service";

export function useCertificates() {

  const [certificates, setCertificates] =
    useState<Certificate[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const load = async () => {

      try {

        const data =
          await getMyCertificates();

        setCertificates(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    load();

  }, []);

  return {

    certificates,

    loading,

  };

}