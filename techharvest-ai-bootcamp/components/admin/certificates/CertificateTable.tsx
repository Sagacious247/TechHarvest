"use client";

import { AdminCertificate } from "@/types/certificate";
import CertificateActions from "./CertificateActions";

interface Props {
  certificates: AdminCertificate[];
  onView: (certificate: AdminCertificate) => void;
}

export default function CertificateTable({
  certificates,
  onView,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="p-4 text-left">
              Student
            </th>

            <th className="p-4 text-left">
              Course
            </th>

            <th className="p-4">
              Certificate No.
            </th>

            <th className="p-4">
              Verification
            </th>

            <th className="p-4">
              Issued
            </th>

            <th className="p-4">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {certificates.map((certificate) => (

            <tr
              key={certificate._id}
              className="border-t"
            >

              <td className="p-4">

                <div>

                  <p className="font-semibold">

                    {certificate.student?.fullName ??
                      "Deleted Student"}

                  </p>

                  <p className="text-sm text-slate-500">

                    {certificate.student?.email ??
                      "--"}

                  </p>

                </div>

              </td>

              <td className="p-4">

                {certificate.course?.title ??
                  "--"}

              </td>

              <td className="p-4 text-center font-medium">

                {certificate.certificateNumber}

              </td>

              <td className="p-4 text-center">

                {certificate.verificationCode}

              </td>

              <td className="p-4 text-center">

                {new Date(
                  certificate.createdAt
                ).toLocaleDateString()}

              </td>

              <td className="p-4 text-center">

                <CertificateActions
                  onView={() =>
                    onView(certificate)
                  }
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}