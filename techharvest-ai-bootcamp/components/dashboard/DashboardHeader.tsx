interface Props {
  fullName: string;
}

export default function DashboardHeader({
  fullName,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white shadow-lg">
      <h1 className="text-4xl font-bold">
        Welcome back,
      </h1>

      <h2 className="text-3xl font-black mt-2">
        {fullName}
      </h2>

      <p className="mt-4 text-green-100">
        Continue building your AI skills today.
      </p>
    </div>
  );
}