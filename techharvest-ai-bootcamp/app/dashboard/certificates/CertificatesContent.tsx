"use client";

import Link from "next/link";

import {
  Award,
  ArrowRight,
} from "lucide-react";

import { useCertificates } from "@/hooks/useCertificates";

export default function CertificatesContent() {

  const {

    certificates,

    loading,

  } = useCertificates();

  if (loading) {

    return (

      <div className="p-10">

        Loading certificates...

      </div>

    );

  }

  return (

    <main className="max-w-7xl mx-auto p-8">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">

          My Certificates

        </h1>

        <p className="text-slate-500 mt-2">

          Certificates earned after completing your courses.

        </p>

      </div>

      {certificates.length === 0 ? (

        <div className="bg-white rounded-2xl shadow p-16 text-center">

          <Award
            size={70}
            className="mx-auto text-green-500"
          />

          <h2 className="mt-6 text-2xl font-bold">

            No Certificates Yet

          </h2>

          <p className="mt-3 text-slate-500 max-w-lg mx-auto">

            Complete all lessons in an enrolled course to unlock your professional TechHarvest Certificate.

          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {certificates.map((certificate) => (

            <div
              key={certificate._id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
            >

              <Award
                className="text-green-500"
                size={45}
              />

              <h2 className="mt-5 text-xl font-bold">

                {certificate.course.title}

              </h2>

              <p className="text-sm text-slate-500 mt-3">

                Certificate No.

              </p>

              <p className="font-semibold">

                {certificate.certificateNumber}

              </p>

              <p className="text-sm text-slate-500 mt-4">

                Issued

              </p>

              <p>

                {new Date(
                  certificate.createdAt
                ).toLocaleDateString()}

              </p>

              <Link
                href={`/dashboard/certificates/${certificate.certificateNumber}`}
                className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
              >

                View Certificate

                <ArrowRight size={18} />

              </Link>

            </div>

          ))}

        </div>

      )}

    </main>

  );

}