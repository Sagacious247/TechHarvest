// "use client";

// import { useMemo, useState } from "react";

// import { useAdminPayments } from "@/hooks/useAdminPayments";

// import PaymentStatistics from "@/components/admin/payments/PaymentStatistics";
// import PaymentTable from "@/components/admin/payments/PaymentTable";
// import PaymentFilters from "@/components/admin/payments/PaymentFilters";

// export default function AdminPaymentsPage() {

//   const {

//     payments,

//     loading,

//   } = useAdminPayments();

//   const [

//     search,

//     setSearch,

//   ] = useState("");

//   const filtered = useMemo(() => {

//   return payments.filter((payment) =>

//     (payment.student?.fullName ?? "")
//       .toLowerCase()
//       .includes(search.toLowerCase())

//   );

// }, [payments, search]);

//   const revenue = filtered.reduce(

//     (sum, payment) =>

//       sum + payment.amount,

//     0

//   );

//   const paid = filtered.filter(

//     (payment) =>

//       payment.paymentStatus === "paid"

//   ).length;

//   const pending = filtered.filter(

//     (payment) =>

//       payment.paymentStatus === "pending"

//   ).length;

//   if (loading) {

//     return (

//       <div className="p-10">

//         Loading Payments...

//       </div>

//     );

//   }

//   return (

//     <div className="space-y-8">

//       <div>

//         <h1 className="text-3xl font-bold">

//           Payments

//         </h1>

//         <p className="text-slate-500">

//           Manage all student payments.

//         </p>

//       </div>

//       <PaymentStatistics

//         totalPayments={filtered.length}

//         totalRevenue={revenue}

//         paid={paid}

//         pending={pending}

//       />

//       <PaymentFilters

//         search={search}

//         setSearch={setSearch}

//       />

//       <PaymentTable

//         payments={filtered}

//       />

//     </div>

//   );

// }

"use client";

import { useMemo, useState } from "react";

import { AdminPayment } from "@/types/payment";

import { useAdminPayments } from "@/hooks/useAdminPayments";

import PaymentStatistics from "@/components/admin/payments/PaymentStatistics";
import PaymentTable from "@/components/admin/payments/PaymentTable";
import PaymentFilters from "@/components/admin/payments/PaymentFilters";
import PaymentDetailsModal from "@/components/admin/payments/PaymentDetailsModal";

export default function AdminPaymentsPage() {
  const {
    payments,
    loading,
  } = useAdminPayments();

  const [search, setSearch] =
    useState("");

  const [
    selectedPayment,
    setSelectedPayment,
  ] =
    useState<AdminPayment | null>(
      null
    );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const filtered = useMemo(() => {
    return payments.filter((payment) =>
      (
        payment.student?.fullName ?? ""
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [payments, search]);

  const revenue = filtered.reduce(
    (sum, payment) =>
      sum + payment.amount,
    0
  );

  const paid = filtered.filter(
    (payment) =>
      payment.paymentStatus ===
      "paid"
  ).length;

  const pending =
    filtered.filter(
      (payment) =>
        payment.paymentStatus ===
        "pending"
    ).length;

  if (loading) {
    return (
      <div className="p-10">
        Loading Payments...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <p className="text-slate-500">
          Manage all student
          payments.
        </p>
      </div>

      <PaymentStatistics
        totalPayments={
          filtered.length
        }
        totalRevenue={revenue}
        paid={paid}
        pending={pending}
      />

      <PaymentFilters
        search={search}
        setSearch={setSearch}
      />

      <PaymentTable
        payments={filtered}
        onView={(payment) => {
          setSelectedPayment(
            payment
          );

          setDetailsOpen(true);
        }}
      />

      <PaymentDetailsModal
        open={detailsOpen}
        payment={selectedPayment}
        onClose={() =>
          setDetailsOpen(false)
        }
      />
    </div>
  );
}