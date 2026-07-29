"use client";

interface Props {

  totalPayments: number;

  totalRevenue: number;

  paid: number;

  pending: number;

}

export default function PaymentStatistics({

  totalPayments,

  totalRevenue,

  paid,

  pending,

}: Props) {

  const cards = [

    {

      title: "Payments",

      value: totalPayments,

    },

    {

      title: "Revenue",

      value: `₦${totalRevenue.toLocaleString()}`,

    },

    {

      title: "Paid",

      value: paid,

    },

    {

      title: "Pending",

      value: pending,

    },

  ];

  return (

    <div className="grid gap-6 md:grid-cols-4">

      {cards.map((card) => (

        <div

          key={card.title}

          className="rounded-2xl bg-white border p-6 shadow-sm"

        >

          <p className="text-sm text-slate-500">

            {card.title}

          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {card.value}

          </h2>

        </div>

      ))}

    </div>

  );

}