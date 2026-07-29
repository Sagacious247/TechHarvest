export interface Settings {
  _id: string;

  platformName: string;

  supportEmail: string;

  supportPhone: string;

  address: string;

  logo: string;

  favicon: string;

  currency: string;

  paystackPublicKey: string;

  paystackSecretKey: string;

  smtpHost: string;

  smtpPort: number;

  smtpUser: string;

  smtpPassword: string;

  senderName: string;

  senderEmail: string;

  certificatePrefix: string;

  directorName: string;
}