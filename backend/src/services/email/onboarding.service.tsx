import WelcomeEmail from "../../templates/WelcomeEmail";
import ReceiptEmail from "../../templates/ReceiptEmail";
import StudentAccountEmail from "../../templates/StudentAccountEmail";
import BootcampDetailsEmail from "../../templates/BootcampDetailsEmail";

import { sendEmail } from "./sendEmail";

interface StudentOnboardingData {
  name: string;
  email: string;
  password: string;

  receiptNumber: string;

  amount: string;

  paymentDate: string;

  course: string;

  dashboardUrl: string;

  whatsappLink: string;

  zoomLink: string;

  bootcampStartDate: string;
}

export async function sendStudentOnboardingEmails(
  student: StudentOnboardingData
) {
  await Promise.all([
    sendEmail({
      to: student.email,
      subject: "🎉 Welcome to TechHarvest AI Bootcamp",
      react: (
        <WelcomeEmail
          name={student.name}
          dashboardUrl={student.dashboardUrl}
        />
      ),
    }),

    sendEmail({
      to: student.email,
      subject: "✅ Payment Successful",
      react: (
        <ReceiptEmail
          name={student.name}
          receiptNumber={student.receiptNumber}
          course={student.course}
          amount={student.amount}
          paymentDate={student.paymentDate}
          dashboardUrl={student.dashboardUrl}
        />
      ),
    }),

    sendEmail({
      to: student.email,
      subject: "🔐 Your Student Account Is Ready",
      react: (
        <StudentAccountEmail
          name={student.name}
          email={student.email}
          password={student.password}
          loginUrl={student.dashboardUrl}
        />
      ),
    }),

    sendEmail({
      to: student.email,
      subject: "📚 Everything You Need Before Bootcamp Begins",
      react: (
        <BootcampDetailsEmail
          name={student.name}
          startDate={student.bootcampStartDate}
          zoomLink={student.zoomLink}
          whatsappLink={student.whatsappLink}
          dashboardUrl={student.dashboardUrl}
        />
      ),
    }),
  ]);
}