import { useLocation } from "react-router";
import "./Header.css";
import { useWindowWidth } from "../hooks/useWindowWidth";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const Header = () => {
  const windowWidth = useWindowWidth();

  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  const handleSidebar = () => {
    const sidebarAbove = document.querySelector('.above');

    if (sidebarAbove) {
      sidebarAbove.classList.remove('above')
      sidebarAbove.classList.add('sidebar-container')
    }

    const sidebar = document.querySelector('.sidebar-container');

    if (sidebar.className === 'sidebar-container' && windowWidth > 768) {
      sidebar.classList.add('hide')
      console.log('clicked', windowWidth, sidebar.className);
    } else if (sidebar.className === 'sidebar-container hide' && windowWidth > 768) {
      console.log('clicked', windowWidth, sidebar.className);
      sidebar.classList.remove('hide')
    } else if (sidebar.className === 'sidebar-container' && windowWidth < 768) {
      sidebar.classList.remove('sidebar-container')
      sidebar.classList.add('above')
      console.log('above', windowWidth, sidebar.className)
    }
  }

  return (
    <div className="header">
      <div>
        <i className='bx bxs-dock-left' onClick={handleSidebar}></i>
      </div>
      {'|'}
      <div>
        Dashboard{" "}{">"}{" "}
        {lastPart === "dashboard" ? "Home" : capitalize(lastPart)}
      </div>
    </div>
  );
};
