// "use client";

// import { AdminPayment } from "@/types/payment";
// import PaymentStatusBadge from "./PaymentStatusBadge";
// import ReceiptButton from "./ReceiptButton";

// interface Props {
//   payments: AdminPayment[];
// }

// export default function PaymentTable({
//   payments,
  
// }: Props) {

//   return (
//     <div className="overflow-hidden rounded-2xl border bg-white">
//       <table className="w-full">
//         <thead className="bg-slate-50">
//           <tr>
//             <th className="p-4 text-left">
//               Student
//             </th>
//             <th className="p-4 text-left">
//               Course
//             </th>
//             <th className="p-4">
//               Amount
//             </th>
//             <th className="p-4">
//               Status
//             </th>
//             <th className="p-4">
//               Paid
//             </th>
//             <th className="p-4">
//               Receipt
//             </th>
//           </tr>
//         </thead>
//         <tbody>

//           {payments.map((payment) => (

//             <tr
//               key={payment.enrollmentId}
//               className="border-t"
//             >

//               <td className="p-4">

//                 <div>

//                  <p className="font-semibold">
//                    {payment.student?.fullName ?? "Deleted Student"}
//                  </p>

//                  <p className="text-sm text-slate-500">
//                    {payment.student?.email ?? "No email available"}
//                  </p>
                  

//                 </div>

//               </td>

//               <td className="p-4">

//                 {payment.course?.title}

//               </td>

//               <td className="p-4 text-center">

//                 ₦

//                 {payment.amount.toLocaleString()}

//               </td>

//               <td className="p-4 text-center">

//                 <PaymentStatusBadge

//                   status={
//                     payment.paymentStatus
//                   }

//                 />

//               </td>

//               <td className="p-4 text-center">

//                 {payment.paidAt

//                   ? new Date(
//                       payment.paidAt
//                     ).toLocaleDateString()

//                   : "--"}

//               </td>

//               <td className="p-4 text-center">

//                 <ReceiptButton

//                   receipt={
//                     payment.receipt
//                   }

//                 />

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>

//   );

// }

"use client";

import { Eye } from "lucide-react";

import { AdminPayment } from "@/types/payment";
import PaymentStatusBadge from "./PaymentStatusBadge";
import ReceiptButton from "./ReceiptButton";

interface Props {
  payments: AdminPayment[];
  onView: (payment: AdminPayment) => void;
}

export default function PaymentTable({
  payments,
  onView,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Student</th>

            <th className="p-4 text-left">Course</th>

            <th className="p-4 text-center">Amount</th>

            <th className="p-4 text-center">Status</th>

            <th className="p-4 text-center">Paid</th>

            <th className="p-4 text-center">Receipt</th>

            <th className="p-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.enrollmentId}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <p className="font-semibold">
                  {payment.student?.fullName ??
                    "Deleted Student"}
                </p>

                <p className="text-sm text-slate-500">
                  {payment.student?.email ??
                    "No email available"}
                </p>
              </td>

              <td className="p-4">
                {payment.course?.title ?? "--"}
              </td>

              <td className="p-4 text-center font-medium">
                ₦{payment.amount.toLocaleString()}
              </td>

              <td className="p-4 text-center">
                <PaymentStatusBadge
                  status={payment.paymentStatus}
                />
              </td>

              <td className="p-4 text-center">
                {payment.paidAt
                  ? new Date(
                      payment.paidAt
                    ).toLocaleDateString()
                  : "--"}
              </td>

              <td className="p-4 text-center">
                <ReceiptButton
                  receipt={payment.receipt}
                />
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() =>
                    onView(payment)
                  }
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-slate-100"
                >
                  <Eye size={16} />

                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}