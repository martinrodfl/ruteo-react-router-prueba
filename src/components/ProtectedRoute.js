import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("authToken"); // Simulación de autenticación

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
