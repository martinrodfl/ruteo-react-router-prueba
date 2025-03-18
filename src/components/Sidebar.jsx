import { NavLink } from "react-router";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <nav>
      <div className="nav-header">
        <img></img> Logo
      </div>
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
      </div>
      <div className="nav-items2">otros items</div>
      <div className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "link active-link" : "inactive-link"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
