import { NavLink } from "react-router";

export function Sidebar() {
  return (
    <nav>
      <NavLink to="/" end>
        Login
      </NavLink>
      {/* Cambiar "/home" por "" ya que es el index de dashboard */}
      <NavLink to="" end>
        HOME
      </NavLink>
      {/* Los paths deben coincidir con las rutas anidadas */}
      <NavLink to="blog">BLOG</NavLink>
      <NavLink to="contact">CONTACT</NavLink>
    </nav>
  );
}
