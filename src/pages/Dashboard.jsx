import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import "./Dashboard.css";

export default function Dashboard() {

  return (
    <div className="dashboard-container-principal">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="contentent-separator">
        <div className="content">
          <div className="header-container">
            <Header />
          </div>
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
