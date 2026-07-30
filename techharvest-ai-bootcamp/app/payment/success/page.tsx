// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { CheckCircle2 } from "lucide-react";

// import { verifyPayment } from "@/services/payment.service";

// export default function PaymentSuccessPage() {

//   const router = useRouter();

//   const params = useSearchParams();

//   const reference =
//     params.get("reference");

//   const [loading, setLoading] =
//     useState(true);

//   const [message, setMessage] =
//     useState("Verifying payment...");

//   useEffect(() => {

//     if (!reference) {

//       setMessage("Invalid payment reference.");

//       return;

//     }

//     const verify = async () => {

//       try {

//         await verifyPayment(reference);

//         setMessage(
//           "Payment Successful!"
//         );

//         setTimeout(() => {

//           router.replace("/dashboard");

//         }, 2500);

//       } catch {

//         setMessage(
//           "Unable to verify payment."
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//     verify();

//   }, [reference, router]);

//   return (

//     <main className="min-h-screen bg-[#08142D] flex items-center justify-center">

//       <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-lg text-center">

//         <CheckCircle2
//           size={90}
//           className="mx-auto text-[#00C853]"
//         />

//         <h1 className="text-4xl font-black mt-6">

//           Payment Successful

//         </h1>

//         <p className="text-gray-600 mt-4">

//           {message}

//         </p>

//         {loading && (

//           <div className="mt-8">

//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00C853] mx-auto"/>

//           </div>

//         )}

//       </div>

//     </main>

//   );

// }



"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { verifyPayment } from "@/services/payment.service";

function PaymentSuccessContent() {
  const router = useRouter();

  const params = useSearchParams();

  const reference = params.get("reference");

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    if (!reference) {
      setMessage("Invalid payment reference.");
      setLoading(false);
      return;
    }

    const verify = async () => {
      try {
        await verifyPayment(reference);

        setMessage("Payment Successful!");

        setTimeout(() => {
          router.replace("/dashboard");
        }, 2500);
      } catch {
        setMessage("Unable to verify payment.");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [reference, router]);

  return (
    <main className="min-h-screen bg-[#08142D] flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-lg text-center">

        <CheckCircle2
          size={90}
          className="mx-auto text-[#00C853]"
        />

        <h1 className="text-4xl font-black mt-6">
          Payment Successful
        </h1>

        <p className="text-gray-600 mt-4">
          {message}
        </p>

        {loading && (
          <div className="mt-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00C853] mx-auto" />
          </div>
        )}
      </div>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          Loading...
        </main>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}