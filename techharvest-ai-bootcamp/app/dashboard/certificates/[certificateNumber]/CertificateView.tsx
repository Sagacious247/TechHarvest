"use client";

import { useEffect, useState } from "react";

import {
  verifyCertificate,
  Certificate,
} from "@/services/certificate.service";

import {
  Award,
  Download,
  Printer,
  ShieldCheck,
} from "lucide-react";

export default function CertificateView({
  certificateNumber,
}: {
  certificateNumber: string;
}) {

  const [certificate, setCertificate] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const load = async () => {

      try {

        const data =
          await verifyCertificate(
            certificateNumber
          );

        setCertificate(data);

      } finally {

        setLoading(false);

      }

    };

    load();

  }, [certificateNumber]);

  if (loading) {

    return (
      <div className="p-20">
        Loading Certificate...
      </div>
    );

  }

  if (!certificate) {

    return (
      <div className="p-20">
        Certificate not found.
      </div>
    );

  }

  return (

    <main className="bg-slate-100 min-h-screen py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">

          <div className="bg-green-600 h-5"></div>

          <div className="p-16 text-center">

            <Award
              size={80}
              className="mx-auto text-yellow-500"
            />

            <h2 className="mt-6 text-green-600 font-semibold tracking-[8px] uppercase">

              TechHarvest Africa

            </h2>

            <h1 className="text-5xl font-black mt-4">

              Certificate

            </h1>

            <p className="text-xl mt-2">

              of Completion

            </p>

            <p className="mt-14 text-slate-500">

              This certifies that

            </p>

            <h2 className="text-4xl font-bold mt-4">

              {certificate.student.fullName}

            </h2>

            <p className="mt-12 text-slate-500">

              has successfully completed

            </p>

            <h3 className="text-3xl font-bold mt-4 text-green-700">

              {certificate.course.title}

            </h3>

            <div className="grid grid-cols-3 gap-10 mt-20">

              <div>

                <p className="text-sm text-slate-500">

                  Issued

                </p>

                <p className="font-semibold">

                  {new Date(
                    certificate.createdAt
                  ).toLocaleDateString()}

                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">

                  Certificate No.

                </p>

                <p className="font-semibold">

                  {certificate.certificateNumber}

                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">

                  Verification

                </p>

                <p className="font-semibold">

                  {certificate.verificationCode}

                </p>

              </div>

            </div>

            <div className="flex justify-between items-end mt-20">

              <div className="text-left">

                <div className="border-t w-48 mb-2"></div>

                <p className="font-bold">

                  Julius Paul

                </p>

                <p className="text-sm text-slate-500">

                  Director

                </p>

              </div>

              <ShieldCheck
                size={70}
                className="text-green-600"
              />

            </div>

          </div>

        </div>

        <div className="flex justify-center gap-6 mt-10">

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">

            <Download size={18} />

            Download PDF

          </button>

          <button
            onClick={() =>
              window.print()
            }
            className="border px-6 py-3 rounded-xl flex items-center gap-2"
          >

            <Printer size={18} />

            Print

          </button>

        </div>

      </div>

    </main>

  );

}