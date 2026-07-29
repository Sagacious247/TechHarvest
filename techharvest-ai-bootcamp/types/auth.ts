// export interface User {
//   id: string;
//   fullName: string;
//   email: string;
//   phone?: string;
//   occupation?: string;
//   experience?: string;
//   status?: string;
//   lastLogin?: string;
//   avatar?: string;
//   role: string;
//   type: "student" | "admin";
// }

// export interface AuthPayload {
//   token: string;
//   user: User;
// }

// export interface LoginResponse {
//   success: boolean;
//   message: string;
//   data: AuthPayload;
// }

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  occupation?: string;
  experience?: string;
  status?: string;
  lastLogin?: string;
  avatar?: string;
  role: string;
  type: "student" | "admin";
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  student?: User;
  admin?: User;
}