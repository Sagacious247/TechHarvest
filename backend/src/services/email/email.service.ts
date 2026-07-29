import React from "react";
import { sendEmail } from "./sendEmail";
import TestEmail from "./TestEmail";

export async function sendTestEmailService(to: string) {
  return sendEmail({
    to,
    subject: "TechHarvest Email Test",
    react: React.createElement(TestEmail, {
      name: "Julius",
    }),
  });
}