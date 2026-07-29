import CertificateView from "./CertificateView";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{
    certificateNumber: string;
  }>;
}) {

  const { certificateNumber } =
    await params;

  return (
    <CertificateView
      certificateNumber={
        certificateNumber
      }
    />
  );

}