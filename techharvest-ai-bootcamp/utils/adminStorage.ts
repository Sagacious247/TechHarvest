const ADMIN_TOKEN_KEY = "techharvest_admin_token";
const ADMIN_USER_KEY = "techharvest_admin_user";

export interface AdminUser {
  _id: string;
  fullName: string;
  email: string;
  role: "super_admin" | "admin";
}

export const adminStorage = {
  saveToken(token: string) {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  },

  getToken() {
    return localStorage.getItem(ADMIN_TOKEN_KEY);
  },

  removeToken() {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  },

  saveUser(user: AdminUser) {
    localStorage.setItem(
      ADMIN_USER_KEY,
      JSON.stringify(user)
    );
  },

  getUser(): AdminUser | null {
    const user = localStorage.getItem(ADMIN_USER_KEY);

    if (!user) return null;

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  },

  removeUser() {
    localStorage.removeItem(ADMIN_USER_KEY);
  },

  clear() {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_USER_KEY);
  },

  isAuthenticated() {
    return !!localStorage.getItem(ADMIN_TOKEN_KEY);
  },
};