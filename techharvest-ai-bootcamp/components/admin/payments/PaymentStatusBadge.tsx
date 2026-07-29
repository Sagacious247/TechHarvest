"use client";

interface Props {
  status: string;
}

export default function PaymentStatusBadge({
  status,
}: Props) {

  const styles = {
    paid:
      "bg-green-100 text-green-700",
    pending:
      "bg-yellow-100 text-yellow-700",
    failed:
      "bg-red-100 text-red-700",
  };

  return (

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[
          status.toLowerCase() as keyof typeof styles
        ] || "bg-slate-100 text-slate-700"
      }`}
    >

      {status}

    </span>

  );

}