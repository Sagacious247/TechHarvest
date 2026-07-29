"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Receipt,
  getMyReceipts,
} from "@/services/receipt.service";

export default function PaymentsPage() {

  const [receipts, setReceipts] =
    useState<Receipt[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadReceipts = async () => {

      try {

        const data =
          await getMyReceipts();

        setReceipts(data);

      } catch (error) {

        console.error(
          "Failed to load receipts:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadReceipts();

  }, []);

  if (loading) {

    return (

      <main className="p-8">

        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold">

            Loading Payments...

          </h2>

        </div>

      </main>

    );

  }

  return (

    <main className="max-w-7xl mx-auto p-8">

      <div className="bg-white rounded-2xl shadow">

        <div className="border-b p-8 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">

              Payment History

            </h1>

            <p className="text-gray-500 mt-2">

              View every payment you've made.

            </p>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4">

                  Receipt

                </th>

                <th className="text-left px-6 py-4">

                  Course

                </th>

                <th className="text-left px-6 py-4">

                  Amount

                </th>

                <th className="text-left px-6 py-4">

                  Status

                </th>

                <th className="text-left px-6 py-4">

                  Date

                </th>

                <th className="text-center px-6 py-4">

                  Action

                </th>

              </tr>

            </thead>

            <tbody>

              {receipts.length === 0 ? (

                <tr>

                  <td
                    colSpan={6}
                    className="py-20 text-center text-gray-500"
                  >

                    <div className="flex flex-col items-center">

                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">

                        📄

                      </div>

                      <h3 className="text-xl font-semibold">

                        No Payments Yet

                      </h3>

                      <p className="mt-2">

                        Once you purchase a course,

                        your payment receipts will

                        appear here.

                      </p>

                    </div>

                  </td>

                </tr>

              ) : (

                receipts.map((receipt) => (

                  <tr
                    key={receipt._id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-5 font-semibold">

                      {receipt.receiptNumber}

                    </td>

                    <td className="px-6 py-5">

                      {receipt.course.title}

                    </td>

                    <td className="px-6 py-5">

                      ₦{receipt.amount.toLocaleString()}

                    </td>

                    <td className="px-6 py-5">

                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">

                        {receipt.status}

                      </span>

                    </td>

                    <td className="px-6 py-5">

                      {new Date(

                        receipt.issuedAt

                      ).toLocaleDateString()}

                    </td>

                    <td className="px-6 py-5 text-center">

                      <Link

                        href={`/dashboard/payments/${receipt._id}`}

                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"

                      >

                        View Receipt

                      </Link>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>

  );

}