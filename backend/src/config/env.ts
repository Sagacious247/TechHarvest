import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 8000,

  MONGODB_URI: process.env.MONGODB_URI || "",

  PAYSTACK_SECRET_KEY:
    process.env.PAYSTACK_SECRET_KEY || "",

  PAYSTACK_PUBLIC_KEY:
    process.env.PAYSTACK_PUBLIC_KEY || "",

  JWT_SECRET:
    process.env.JWT_SECRET || "TechHarvestSecret",

  JWT_EXPIRES_IN:
    process.env.JWT_EXPIRES_IN || "7d",

  FRONTEND_URL:
    process.env.FRONTEND_URL ||
    "http://localhost:3000",
};

export default env;
