import mongoose, { Schema, Document } from "mongoose";

export interface ISetting extends Document {
  platformName: string;

  supportEmail: string;

  supportPhone: string;

  address: string;

  logo?: string;

  favicon?: string;

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

const settingSchema = new Schema(
  {
    platformName: {
      type: String,
      default: "TechHarvest AI Bootcamp",
    },

    supportEmail: {
      type: String,
      default: "",
    },

    supportPhone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    favicon: {
      type: String,
      default: "",
    },

    currency: {
      type: String,
      default: "NGN",
    },

    paystackPublicKey: {
      type: String,
      default: "",
    },

    paystackSecretKey: {
      type: String,
      default: "",
    },

    smtpHost: {
      type: String,
      default: "",
    },

    smtpPort: {
      type: Number,
      default: 587,
    },

    smtpUser: {
      type: String,
      default: "",
    },

    smtpPassword: {
      type: String,
      default: "",
    },

    senderName: {
      type: String,
      default: "",
    },

    senderEmail: {
      type: String,
      default: "",
    },

    certificatePrefix: {
      type: String,
      default: "TH",
    },

    directorName: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISetting>(
  "Setting",
  settingSchema
);