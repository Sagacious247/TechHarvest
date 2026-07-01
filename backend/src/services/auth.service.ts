import bcrypt from "bcrypt";
import Admin from "../models/admin.model";
import { generateToken } from "../utils/generateToken";

export const registerAdmin = async (
  fullName: string,
  email: string,
  password: string
) => {

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    throw new Error("Admin already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    fullName,
    email,
    password: hashedPassword,
    role: "super_admin",
  });

  const token = generateToken(
    admin._id.toString(),
    admin.role
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

  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(
    password,
    admin.password
  );

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(
    admin._id.toString(),
    admin.role
  );

  return {
    admin,
    token,
  };
};
