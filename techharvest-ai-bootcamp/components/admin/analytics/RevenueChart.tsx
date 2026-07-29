"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  revenue: {
    _id: {
      month: number;
    };
    revenue: number;
  }[];
}

const months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function RevenueChart({
  revenue,
}: Props) {

  const data = revenue.map((item) => ({
    month: months[item._id.month],
    revenue: item.revenue,
  }));

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Monthly Revenue
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <AreaChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            dataKey="revenue"
            stroke="#16a34a"
            fill="#bbf7d0"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}