import { resend } from "../../config/resend";
import React from "react";

interface SendEmailOptions {
  to: string;
  subject: string;
  react: React.ReactElement;
}

export async function sendEmail({
  to,
  subject,
  react,
}: SendEmailOptions) {
  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to,
    subject,
    react,
  });

  if (error) {
    throw error;
  }

  return data;
}