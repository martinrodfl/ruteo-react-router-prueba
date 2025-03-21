import { useLocation } from "react-router";
import "./Header.css";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const Header = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  return (
    <div className="header">
      <div>
        <i className="bx bxs-dashboard"></i>
      </div>
      <div>
        Dashboard {">"}{" "}
        {lastPart === "dashboard" ? "Home" : capitalize(lastPart)}
      </div>
    </div>
  );
};
