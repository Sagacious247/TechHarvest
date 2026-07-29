"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function CertificateFilters({
  search,
  setSearch,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <input
        type="text"
        placeholder="Search student, course or certificate..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
      />
    </div>
  );
}