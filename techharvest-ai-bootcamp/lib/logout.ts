export function logoutAdmin() {
  localStorage.removeItem("techharvest_admin_token");
  localStorage.removeItem("techharvest_admin");

  sessionStorage.clear();

  window.location.replace("/admin/login");
}