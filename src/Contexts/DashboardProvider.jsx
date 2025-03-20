import { useState, useEffect } from "react";
import { DashboardContext } from "./DashboardContext";
import PropTypes from "prop-types";

// const sidebar = localStorage.getItem("sidebarHide");

export function DashboardProvider({ children }) {
  const [hideSidebar, setHideSidebar] = useState(false);

  useEffect(() => {
    setHideSidebar(!hideSidebar);
  }, []);

  return (
    <DashboardContext.Provider value={{ hideSidebar, setHideSidebar }}>
      {children}
    </DashboardContext.Provider>
  );
}

DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
