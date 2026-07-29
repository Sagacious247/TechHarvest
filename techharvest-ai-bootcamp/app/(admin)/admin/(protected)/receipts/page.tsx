"use client";

import { useAdminReceipts } from "@/hooks/useAdminReceipts";

export default function AdminReceiptsPage() {

  const {

    receipts,

    loading,

  } = useAdminReceipts();

  if (loading) {

    return (

      <div className="p-10">

        Loading Receipts...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Receipts

        </h1>

        <p className="text-slate-500">

          Manage all payment receipts.

        </p>

      </div>

      <div className="rounded-2xl border bg-white">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">

                Receipt No

              </th>

              <th className="p-4 text-left">

                Student

              </th>

              <th className="p-4 text-left">

                Course

              </th>

              <th className="p-4">

                Amount

              </th>

              <th className="p-4">

                Date

              </th>

            </tr>

          </thead>

          <tbody>

            {receipts.map((receipt) => (

              <tr
                key={receipt._id}
                className="border-t"
              >

                <td className="p-4">

                  {receipt.receiptNumber}

                </td>

                <td className="p-4">

                  {receipt.student?.fullName ??
                    "Deleted Student"}

                </td>

                <td className="p-4">

                  {receipt.course?.title ??
                    "--"}

                </td>

                <td className="p-4 text-center">

                  ₦{receipt.amount.toLocaleString()}

                </td>

                <td className="p-4 text-center">

                  {new Date(
                    receipt.issuedAt
                  ).toLocaleDateString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}