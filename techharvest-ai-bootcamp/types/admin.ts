export interface AdminUser {
  _id: string;
  fullName: string;
  email: string;
  role: "super_admin" | "admin";
}

export interface AdminLoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    admin: AdminUser;
  };
}