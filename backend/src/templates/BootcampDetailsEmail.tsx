import EmailLayout from "./components/EmailLayout";
import EmailButton from "./components/EmailButton";

interface Props {
  name: string;
  startDate: string;
  zoomLink: string;
  whatsappLink: string;
  dashboardUrl: string;
}

export default function BootcampDetailsEmail({
  name,
  startDate,
  zoomLink,
  whatsappLink,
  dashboardUrl,
}: Props) {
  return (
    <EmailLayout title="Everything You Need Before Bootcamp Begins">

      <p>
        Hi <strong>{name}</strong>,
      </p>

      <p>
        We're excited to have you join the TechHarvest AI Bootcamp.
      </p>

      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "24px",
          marginTop: "30px",
        }}
      >
        <p>
          <strong>Bootcamp Starts</strong>
        </p>

        <p>{startDate}</p>

        <hr />

        <p>
          <strong>Preparation Checklist</strong>
        </p>

        <ul>
          <li>✔ Laptop or Desktop Computer</li>
          <li>✔ Stable Internet Connection</li>
          <li>✔ Notebook & Pen</li>
          <li>✔ Positive Learning Mindset</li>
        </ul>
      </div>

      <EmailButton
        title="Open Student Dashboard"
        href={dashboardUrl}
      />

      <EmailButton
        title="Join WhatsApp Community"
        href={whatsappLink}
      />

      <EmailButton
        title="Join Live Zoom Class"
        href={zoomLink}
      />

    </EmailLayout>
  );
}