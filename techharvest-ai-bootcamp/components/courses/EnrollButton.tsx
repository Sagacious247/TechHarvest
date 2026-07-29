"use client";

import { useState } from "react";

import { createEnrollment } from "@/services/enrollment.service";

import { initializePayment } from "@/services/payment.service";

interface Props {

  courseId: string;

}

export default function EnrollButton({

  courseId,

}: Props) {

  const [loading, setLoading] =
    useState(false);

  const handleEnroll = async () => {
    console.log(
    "Token before enrollment:",
    localStorage.getItem("techharvest_token")
  );

    try {

      setLoading(true);

      /**
       * Create Enrollment
       */
      const enrollment =
        await createEnrollment(courseId);
        console.log("Enrollment:", enrollment);
      /**
       * Initialize Payment
       */
      const payment =
        await initializePayment(
          enrollment._id
        );
       console.log("Payment:", payment);
      /**
       * Redirect to Paystack
       */

      window.location.assign(
        payment.authorization_url
       );
      // window.location.href =
      //   payment.authorization_url;

    } catch (error) {

      console.error(error);

      alert(
        "Unable to start payment."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <button

      onClick={handleEnroll}

      disabled={loading}

      className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"

    >

      {loading

        ? "Redirecting..."

        : "Enroll Now"}

    </button>

  );

}