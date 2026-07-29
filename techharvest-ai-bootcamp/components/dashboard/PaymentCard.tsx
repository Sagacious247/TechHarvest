"use client";

import Link from "next/link";

import { PaymentHistory } from "@/services/paymentHistory.service";

interface Props {

  payment: PaymentHistory;

}

export default function PaymentCard({

  payment,

}: Props) {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold">

        {payment.course.title}

      </h2>

      <p className="mt-2 text-gray-500">

        ₦{payment.amount.toLocaleString()}

      </p>

      <div className="mt-4">

        {payment.paymentStatus === "success" && (

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

            Paid

          </span>

        )}

        {payment.paymentStatus === "pending" && (

          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">

            Pending

          </span>

        )}

        {payment.paymentStatus === "failed" && (

          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">

            Failed

          </span>

        )}

      </div>

      <div className="mt-6 flex gap-3">

        {payment.paymentStatus === "success" &&
          payment.receipt && (

          <>

            <Link

              href={`/dashboard/payments/${payment.receipt._id}`}

              className="px-4 py-2 rounded-lg bg-green-600 text-white"

            >

              View Receipt

            </Link>

            <Link

              href={`/dashboard/payments/${payment.receipt._id}/download`}

              className="px-4 py-2 rounded-lg border"

            >

              Download PDF

            </Link>

          </>

        )}

        {payment.paymentStatus === "pending" && (

          <button

            className="px-4 py-2 rounded-lg bg-yellow-500 text-white"

          >

            Continue Payment

          </button>

        )}

      </div>

    </div>

  );

}