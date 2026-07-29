"use client";

interface Props {
  payments: any[];
}

export default function RecentPayments({
  payments,
}: Props) {

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recent Payments
      </h2>

      <div className="space-y-4">

        {payments.length === 0 ? (

          <p className="text-slate-500">
            No payments yet.
          </p>

        ) : (

          payments.map((payment) => (

            <div
              key={payment._id}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >

              <div>

                <p className="font-semibold">
                  {payment.enrollment?.student?.fullName ??
                    "Deleted Student"}
                </p>

                <p className="text-sm text-slate-500">
                  {payment.enrollment?.course?.title}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold text-green-600">
                  ₦{payment.amount.toLocaleString()}
                </p>

                <p className="text-xs text-slate-400">
                  {payment.status}
                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}