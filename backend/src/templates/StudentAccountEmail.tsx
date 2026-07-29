import EmailLayout from "./components/EmailLayout";
import EmailButton from "./components/EmailButton";

interface Props {
  name: string;
  email: string;
  password: string;
  loginUrl: string;
}

export default function StudentAccountEmail({
  name,
  email,
  password,
  loginUrl,
}: Props) {
  return (
    <EmailLayout title="Your Student Account Is Ready">

      <p>
        Hi <strong>{name}</strong>,
      </p>

      <p>
        Your TechHarvest student account has been created successfully.
      </p>

      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "24px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <p>
          <strong>Email</strong>
        </p>

        <p>{email}</p>

        <br />

        <p>
          <strong>Temporary Password</strong>
        </p>

        <p>{password}</p>
      </div>

      <p>
        Please log in immediately and change your password for security.
      </p>

      <EmailButton
        title="Login To Dashboard"
        href={loginUrl}
      />

    </EmailLayout>
  );
}