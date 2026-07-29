import EmailLayout from "./components/EmailLayout";
import EmailButton from "./components/EmailButton";

interface Props {
  name: string;
  dashboardUrl: string;
}

export default function WelcomeEmail({
  name,
  dashboardUrl,
}: Props) {
  return (
    <EmailLayout title="🎉 Welcome to TechHarvest AI Bootcamp">
      <p>
        Hi <strong>{name}</strong>,
      </p>

      <p>
        Congratulations and welcome to the
        TechHarvest AI Bootcamp.
      </p>

      <p>
        You've just taken an important step
        toward mastering Artificial
        Intelligence and building valuable
        digital skills for the future.
      </p>

      <p>
        Throughout this bootcamp, you'll
        learn how to:
      </p>

      <ul>
        <li>Build with AI tools</li>
        <li>Increase productivity</li>
        <li>Create new income opportunities</li>
        <li>Automate repetitive work</li>
        <li>Stay ahead in your career</li>
      </ul>

      <EmailButton
        title="Go To My Dashboard"
        href={dashboardUrl}
      />
    </EmailLayout>
  );
}