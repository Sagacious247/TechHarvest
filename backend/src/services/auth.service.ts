import bcrypt from "bcrypt";

import Admin from "../models/admin.model";

import { generateToken } from "../utils/generateToken";
import AppError from "../utils/AppError";

export const registerAdmin = async (
  fullName: string,
  email: string,
  password: string
) => {

  const existingAdmin = await Admin.findOne({
    email,
  });

  if (existingAdmin) {
    throw new AppError(
      "Admin already exists.",
      409
    );
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const admin = await Admin.create({
    fullName,
    email,
    password: hashedPassword,
    role: "admin",
  });

  const token = generateToken(
    admin._id.toString(),
    admin.email,
    admin.role,
    "admin"
  );

  return {
    admin,
    token,
  };

};

export const loginAdmin = async (
  email: string,
  password: string
  
) => {

  const admin = await Admin.findOne({
    email,
  });

  if (!admin) {
    throw new AppError(
      "Invalid email or password.",
      401
    );
  }

  /**
   * Account Status Check
   */
  if (admin.status !== "active") {
    throw new AppError(
      "Your account has been disabled. Please contact the system administrator.",
      403
    );
  }

  const isMatch = await bcrypt.compare(
    password,
    admin.password
  );

  if (!isMatch) {
    throw new AppError(
      "Invalid email or password.",
      401
    );
  }

  /**
   * Update Last Login
   */
  admin.lastLogin = new Date();

  await admin.save();

  const token = generateToken(
    admin._id.toString(),
    admin.email,
    admin.role,
    "admin"
  );

  return {
    admin,
    token,
  };

};