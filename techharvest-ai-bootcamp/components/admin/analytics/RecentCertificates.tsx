"use client";

interface Props {
  certificates: any[];
}

export default function RecentCertificates({
  certificates,
}: Props) {

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Latest Certificates
      </h2>

      <div className="space-y-4">

        {certificates.length === 0 ? (

          <p className="text-slate-500">
            No certificates issued.
          </p>

        ) : (

          certificates.map((certificate) => (

            <div
              key={certificate._id}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >

              <div>

                <p className="font-semibold">
                  {certificate.student?.fullName}
                </p>

                <p className="text-sm text-slate-500">
                  {certificate.course?.title}
                </p>

              </div>

              <span className="text-xs text-slate-400">
                {new Date(
                  certificate.createdAt
                ).toLocaleDateString()}
              </span>

            </div>

          ))

        )}

      </div>

    </div>

  );

}