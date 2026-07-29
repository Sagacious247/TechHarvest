import { Request, Response } from "express";

import { sendEmail } from "../services/email/sendEmail";

import WelcomeEmail from "../templates/WelcomeEmail";
import ReceiptEmail from "../templates/ReceiptEmail";
import StudentAccountEmail from "../templates/StudentAccountEmail";
import BootcampDetailsEmail from "../templates/BootcampDetailsEmail";

export async function sendTestEmail(
  req: Request,
  res: Response
) {
  try {
    const type =
      (req.query.type as string) || "welcome";

    const email =
      "techharvestcreativelab@gmail.com";

    switch (type) {

      case "welcome":

        await sendEmail({
          to: email,
          subject: "Welcome to TechHarvest",
          react: (
            <WelcomeEmail
              name="Julius"
              dashboardUrl="http://localhost:3000/login"
            />
          ),
        });

        break;

      case "receipt":

        await sendEmail({
          to: email,
          subject: "Payment Successful",
          react: (
            <ReceiptEmail
              name="Julius"
              receiptNumber="TH-202600001"
              course="TechHarvest AI Bootcamp"
              amount="₦20,000"
              paymentDate={new Date().toLocaleDateString()}
              dashboardUrl="http://localhost:3000/login"
            />
          ),
        });

        break;

      case "account":

        await sendEmail({
          to: email,
          subject: "Student Account Ready",
          react: (
            <StudentAccountEmail
              name="Julius"
              email={email}
              password="Temp12345"
              loginUrl="http://localhost:3000/login"
            />
          ),
        });

        break;

      case "bootcamp":

        await sendEmail({
          to: email,
          subject: "Bootcamp Details",
          react: (
            <BootcampDetailsEmail
              name="Julius"
              startDate="August 2, 2026"
              dashboardUrl="http://localhost:3000/login"
              whatsappLink="https://chat.whatsapp.com/xxxxxxxx"
              zoomLink="https://zoom.us/j/xxxxxxxx"
            />
          ),
        });

        break;

      default:

        return res.status(400).json({
          success: false,
          message: "Unknown email type",
        });

    }

    return res.json({
      success: true,
      message: `${type} email sent successfully`,
    });

  } catch (error: any) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}