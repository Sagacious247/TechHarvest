interface Props {
  status?: "online" | "offline";
}

export default function AIStatusBadge({
  status = "online",
}: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
        status === "online"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          status === "online"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      />

      {status === "online"
        ? "AI Online"
        : "Offline"}
    </div>
  );
}