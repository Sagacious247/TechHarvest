import axios from "axios";
import { LoginResponse } from "@/types/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Automatically attach JWT Token
 */
api.interceptors.request.use((config) => {

  if (typeof window !== "undefined") {

    const studentToken =
      localStorage.getItem("techharvest_token");

    const adminToken =
      localStorage.getItem("techharvest_admin_token");

const adminRoutes = [
  "/auth",
  "/admin",
  "/courses",
  "/modules",
  "/lessons",
  "/students",
  "/payments",
  "/payment-history",
  "/receipts",
  "/certificates",
  // "/notifications",
  "/course-content",
  "/upload",
];

const isAdminRoute = adminRoutes.some((route) =>
  config.url?.startsWith(route)
);

const token =
  isAdminRoute
    ? adminToken
    : studentToken;

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

  }

  return config;

});

/* ======================================================
   TYPES
====================================================== */

export interface RegisterStudentData {

  fullName: string;

  email: string;

  password: string;

  phone: string;

  occupation?: string;

  experience?: string;

}

/* ======================================================
   AUTH
====================================================== */

export const registerStudent = async (
  data: RegisterStudentData
) => {

  const response = await api.post(
    "/students/register",
    data
  );

  return response.data;

};

export const loginStudent = async (
  email: string,
  password: string
): Promise<LoginResponse> => {

  const response = await api.post(
    "/student-auth/login",
    {
      email,
      password,
    }
  );

  return response.data;

};

export const getStudentProfile = async () => {

  const response = await api.get(
    "/student-auth/profile"
  );

  return response.data;

};

// Update Student Profile
export const updateStudentProfile = async (
  data: {
    fullName: string;
    phone: string;
    occupation: string;
    experience: string;
  }
) => {

  const response = await api.put(
    "/student-auth/profile",
    data
  );

  return response.data;

};

// Students Password Settings
export const changePassword = async (
  data: {

    currentPassword: string;

    newPassword: string;

    confirmPassword: string;

  }

) => {

  const response = await api.put(

    "/student-auth/change-password",

    data

  );

  return response.data;

};



/* ======================================================
   ADMIN AUTH
====================================================== */

export interface RegisterAdminData {
  fullName: string;
  email: string;
  password: string;
}

export const registerAdmin = async (
  data: RegisterAdminData
) => {
  const response = await api.post(
    "/auth/register",
    data
  );
  return response.data.data;
};

export const loginAdmin = async (
  email: string,
  password: string
) => {

  const response = await api.post(
    "/auth/login",
    {
      email,
      password,
    }
  );

  return response.data.data;

};

export const getAdminProfile = async () => {

  const response = await api.get(

    "/auth/profile"

  );

  return response.data.user;

};


/* ======================================================
   DASHBOARD
====================================================== */

export const getDashboard = async () => {

  const response = await api.get(
    "/student-auth/dashboard"
  );

  return response.data.data;

};

/* ======================================================
   COURSE
====================================================== */

export const getCourse = async (
  id: string
) => {

  const response = await api.get(
    `/courses/${id}`
  );

  return response.data.data;

};

// Notifications
export const getNotifications = async () => {

  const response = await api.get(
    "/notifications"
  );

  return response.data;

};

export const markNotificationAsRead = async (
  id: string
) => {

  const response = await api.put(
    `/notifications/${id}/read`
  );

  return response.data;

};




export default api;