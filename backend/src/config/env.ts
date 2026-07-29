import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing.");
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is missing.");
}

const env = {
  PORT: Number(process.env.PORT) || 8000,

  MONGODB_URI: process.env.MONGODB_URI,

  JWT_SECRET: process.env.JWT_SECRET,

  JWT_EXPIRES_IN:
    process.env.JWT_EXPIRES_IN || "7d",

  PAYSTACK_SECRET_KEY:
    process.env.PAYSTACK_SECRET_KEY || "",

  PAYSTACK_PUBLIC_KEY:
    process.env.PAYSTACK_PUBLIC_KEY || "",

  FRONTEND_URL:
    process.env.FRONTEND_URL ||
    "http://localhost:3000",


  CLOUDINARY_CLOUD_NAME:
    process.env.CLOUDINARY_CLOUD_NAME!,

  CLOUDINARY_API_KEY:
    process.env.CLOUDINARY_API_KEY!,

  CLOUDINARY_API_SECRET:
    process.env.CLOUDINARY_API_SECRET!,


     // ✅ Add them HERE
  ZOOM_LINK:
    process.env.ZOOM_LINK || "",

  WHATSAPP_LINK:
    process.env.WHATSAPP_LINK || "",

  BOOTCAMP_START_DATE:
    process.env.BOOTCAMP_START_DATE ||
    "Coming Soon",
  };


export default env;