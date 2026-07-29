import api from "@/lib/api";
import { LoginResponse } from "@/types/auth";

export const loginStudent = async (
  email: string,
  password: string
) => {
  const response = await api.post<LoginResponse>(
    "/student-auth/login",
    {
      email,
      password,
    }
  );

  return response.data;
};

export const loginAdmin = async (
  email: string,
  password: string
) => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    {
      email,
      password,
    }
  );

  return response.data;
};