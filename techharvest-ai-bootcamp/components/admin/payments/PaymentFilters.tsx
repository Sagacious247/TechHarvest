"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function PaymentFilters({
  search,
  setSearch,
}: Props) {

  return (
    <input
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder="Search student..."
      className="w-full rounded-xl border px-4 py-3"
    />
  );
}