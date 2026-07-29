"use client";

import {
  Award,
  BookOpen,
  Calendar,
  Copy,
  Download,
  ExternalLink,
  Mail,
  User,
  X,
} from "lucide-react";

import { AdminCertificate } from "@/types/certificate";

interface Props {
  open: boolean;
  certificate: AdminCertificate | null;
  onClose: () => void;
}

export default function CertificateDetailsModal({
  open,
  certificate,
  onClose,
}: Props) {
  if (!open || !certificate) return null;

  const copyCode = () => {
    navigator.clipboard.writeText(
      certificate.verificationCode
    );
    alert("Verification code copied.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold">
              Certificate Details
            </h2>

            <p className="text-slate-500">
              View issued certificate information
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={24} />
          </button>

        </div>

        {/* Content */}

        <div className="grid gap-6 p-8 md:grid-cols-2">

          <Card
            icon={<User size={20} />}
            title="Student"
            value={
              certificate.student?.fullName ??
              "Deleted Student"
            }
          />

          <Card
            icon={<Mail size={20} />}
            title="Email"
            value={
              certificate.student?.email ??
              "--"
            }
          />

          <Card
            icon={<BookOpen size={20} />}
            title="Course"
            value={
              certificate.course?.title ??
              "--"
            }
          />

          <Card
            icon={<Award size={20} />}
            title="Certificate Number"
            value={
              certificate.certificateNumber
            }
          />

          <Card
            icon={<Award size={20} />}
            title="Verification Code"
            value={
              certificate.verificationCode
            }
          />

          <Card
            icon={<Calendar size={20} />}
            title="Issued"
            value={new Date(
              certificate.createdAt
            ).toLocaleString()}
          />

        </div>

        {/* Footer */}

        <div className="flex flex-wrap justify-end gap-3 border-t p-6">

          <button
            onClick={copyCode}
            className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-50"
          >
            <Copy size={18} />
            Copy Code
          </button>

          <button
            disabled
            className="flex cursor-not-allowed items-center gap-2 rounded-xl border px-5 py-3 text-slate-400"
          >
            <Download size={18} />
            Download PDF
          </button>

          <button
            disabled
            className="flex cursor-not-allowed items-center gap-2 rounded-xl border px-5 py-3 text-slate-400"
          >
            <ExternalLink size={18} />
            Verify
          </button>

          <button
            onClick={onClose}
            className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">

      <div className="mb-3 flex items-center gap-2 text-green-600">

        {icon}

        <span className="font-medium">
          {title}
        </span>

      </div>

      <p className="break-all font-semibold text-slate-700">
        {value}
      </p>

    </div>
  );
}