"use client";

import { useMemo, useState } from "react";

import { useAdminCertificates } from "@/hooks/useAdminCertificates";

import { AdminCertificate } from "@/types/certificate";

import CertificateStatistics from "@/components/admin/certificates/CertificateStatistics";
import CertificateFilters from "@/components/admin/certificates/CertificateFilters";
import CertificateTable from "@/components/admin/certificates/CertificateTable";
import CertificateDetailsModal from "@/components/admin/certificates/CertificateDetailsModal";

export default function AdminCertificatesPage() {

  const {

    certificates,

    loading,

  } = useAdminCertificates();

  const [

    search,

    setSearch,

  ] = useState("");

  const [

    selected,

    setSelected,

  ] = useState<AdminCertificate | null>(null);

  const [

    open,

    setOpen,

  ] = useState(false);

  const filtered = useMemo(() => {

    return certificates.filter((certificate) => {

      const keyword = search.toLowerCase();

      return (

        certificate.student?.fullName
          ?.toLowerCase()
          .includes(keyword)

        ||

        certificate.student?.email
          ?.toLowerCase()
          .includes(keyword)

        ||

        certificate.course?.title
          ?.toLowerCase()
          .includes(keyword)

        ||

        certificate.certificateNumber
          .toLowerCase()
          .includes(keyword)

        ||

        certificate.verificationCode
          .toLowerCase()
          .includes(keyword)

      );

    });

  }, [certificates, search]);

  const today = new Date().toDateString();

  const issuedToday = filtered.filter(

    (certificate) =>

      new Date(

        certificate.createdAt

      ).toDateString() === today

  ).length;

  const thisMonth = filtered.filter(

    (certificate) => {

      const date = new Date(

        certificate.createdAt

      );

      const now = new Date();

      return (

        date.getMonth() ===

          now.getMonth()

        &&

        date.getFullYear() ===

          now.getFullYear()

      );

    }

  ).length;

  if (loading) {

    return (

      <div className="p-10">

        Loading certificates...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Certificates

        </h1>

        <p className="text-slate-500">

          View and manage issued certificates.

        </p>

      </div>

      <CertificateStatistics

        total={filtered.length}

        today={issuedToday}

        thisMonth={thisMonth}

        verified={filtered.length}

      />

      <CertificateFilters

        search={search}

        setSearch={setSearch}

      />

      <CertificateTable

        certificates={filtered}

        onView={(certificate) => {

          setSelected(certificate);

          setOpen(true);

        }}

      />

      <CertificateDetailsModal

        open={open}

        certificate={selected}

        onClose={() => {

          setOpen(false);

          setSelected(null);

        }}

      />

    </div>

  );

}