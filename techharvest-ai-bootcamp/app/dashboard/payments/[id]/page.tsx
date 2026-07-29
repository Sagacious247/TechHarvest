"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getReceipt } from "@/services/receipt.service";

interface Receipt {

  _id: string;

  receiptNumber: string;

  amount: number;

  currency: string;

  paymentMethod: string;

  paymentReference: string;

  status: string;

  issuedAt: string;

  student: {

    fullName: string;

    email: string;

    phone?: string;

  };

  course: {

    title: string;

    thumbnail?: string;

    duration?: string;

    price?: number;

  };

}

export default function ReceiptPage() {

  const params = useParams();

const id = (() => {
  const value = params.id;
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;

})();

  const [receipt, setReceipt] =
    useState<Receipt | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

  if (!id) return;

  const loadReceipt = async () => {

    try {

      const data = await getReceipt(id);

      setReceipt(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  loadReceipt();

}, [id]);

  if (loading) {

    return (

      <div className="p-10">

        Loading Receipt...

      </div>

    );

  }

  if (!receipt) {

    return (

      <div className="p-10">

        Receipt not found.

      </div>

    );

  }

  return (

    <main className="max-w-4xl mx-auto py-10">

      <div className="bg-white rounded-2xl shadow-lg p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">

              PAYMENT RECEIPT

            </h1>

            <p className="text-gray-500">

              TechHarvest AI Bootcamp

            </p>

          </div>

          <div className="text-right">

            <h3 className="font-bold">

              {receipt.receiptNumber}

            </h3>

            <p>

              {new Date(
                receipt.issuedAt
              ).toLocaleDateString()}

            </p>

          </div>

        </div>

        <hr className="my-8"/>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h3 className="font-bold mb-3">

              Student

            </h3>

            <p>{receipt.student.fullName}</p>

            <p>{receipt.student.email}</p>

            <p>{receipt.student.phone}</p>

          </div>

          <div>

            <h3 className="font-bold mb-3">

              Course

            </h3>

            <p>{receipt.course.title}</p>

          </div>

        </div>

        <hr className="my-8"/>

        <div className="space-y-3">

          <div className="flex justify-between">

            <span>Amount</span>

            <strong>

              ₦{receipt.amount.toLocaleString()}

            </strong>

          </div>

          <div className="flex justify-between">

            <span>Currency</span>

            <strong>

              {receipt.currency}

            </strong>

          </div>

          <div className="flex justify-between">

            <span>Payment Method</span>

            <strong>

              {receipt.paymentMethod}

            </strong>

          </div>

          <div className="flex justify-between">

            <span>Reference</span>

            <strong>

              {receipt.paymentReference}

            </strong>

          </div>

          <div className="flex justify-between">

            <span>Status</span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">

              {receipt.status.toUpperCase()}

            </span>

          </div>

        </div>

        <div className="mt-10">

          <button

            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"

          >

            Download Receipt

          </button>

        </div>

      </div>

    </main>

  );

}