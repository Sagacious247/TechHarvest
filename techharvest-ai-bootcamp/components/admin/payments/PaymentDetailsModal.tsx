"use client";

interface PaymentDetailsModalProps {
  open: boolean;
  payment: any | null;
  onClose: () => void;
}

export default function PaymentDetailsModal({
  open,
  payment,
  onClose,
}: PaymentDetailsModalProps) {
  if (!open || !payment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b px-8 py-6">

          <div>
            <h2 className="text-2xl font-bold">
              Payment Details
            </h2>

            <p className="text-slate-500">
              Complete payment information
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6 p-8">

          <Info
            title="Student"
            value={
              payment.student?.fullName ??
              "Deleted Student"
            }
          />

          <Info
            title="Email"
            value={
              payment.student?.email ??
              "--"
            }
          />

          <Info
            title="Course"
            value={
              payment.course?.title ??
              "--"
            }
          />

          <Info
            title="Amount"
            value={`₦${payment.amount.toLocaleString()}`}
          />

          <Info
            title="Status"
            value={payment.paymentStatus}
          />

          <Info
            title="Reference"
            value={
              payment.paymentReference ??
              "--"
            }
          />

          <Info
            title="Paid At"
            value={
              payment.paidAt
                ? new Date(
                    payment.paidAt
                  ).toLocaleString()
                : "--"
            }
          />

          <Info
            title="Receipt"
            value={
              payment.receipt
                ? "Generated"
                : "Not Generated"
            }
          />

        </div>

        <div className="flex justify-end border-t px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-lg bg-green-600 px-6 py-3 text-white"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
}