import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
