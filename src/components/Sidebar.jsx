import { NavLink } from "react-router";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <nav>
      <div className="nav-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo"
        />
        <h2>MySuperDashboard</h2>
      </div>
      <div className="nav-section-wraper">
        <div className="nav-section">
          <div className="nav-section-title">
            <p>Principal</p>
            <span className="line"></span>
          </div>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            HOME
          </NavLink>{" "}
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            USERS
          </NavLink>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            TASKS
          </NavLink>
        </div>
        <div className="nav-section">
          <div className="nav-section-title">
            <p>Otra seccion</p>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="nav-section-footer">
        <div className="nav-section">
          <NavLink
            to="settings"
            end
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "link active-link" : "inactive-link"
            }
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
