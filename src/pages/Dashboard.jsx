import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Sidebar />
      <Outlet />
    </div>
  );
}
