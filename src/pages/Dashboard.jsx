import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Home</h1>
      <Sidebar />
      <Outlet />
    </div>
  );
}
