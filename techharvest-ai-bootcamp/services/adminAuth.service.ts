import axios from "axios";
import { adminStorage } from "@/utils/adminStorage";
import { AdminLoginResponse } from "@/types/admin";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {

  const token =
    adminStorage.getToken();

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`;

  }

  return config;

});

export const loginAdmin = async (
  email: string,
  password: string
):  Promise<AdminLoginResponse["data"]> => {

  const response =
    await api.post("/auth/login", {
      email,
      password,
    });

  return response.data.data;

};

export const registerAdmin = async (
  fullName: string,
  email: string,
  password: string
) => {

  const response =
    await api.post("/auth/register", {

      fullName,

      email,

      password,

    });

  return response.data;

};

export const getAdminProfile =
  async () => {

    const response =
      await api.get("/auth/profile");

    return response.data.user;
    // return response.data;
  };

export default api;