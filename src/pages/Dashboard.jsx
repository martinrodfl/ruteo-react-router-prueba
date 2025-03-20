import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container hideSidebar">
      <div className="sidebar-grid ">
        <Sidebar />
      </div>
      <div className="header-grid">
        <Header />
      </div>
      <div className="main-content-grid">
        <Outlet />
      </div>
    </div>
  );
}
