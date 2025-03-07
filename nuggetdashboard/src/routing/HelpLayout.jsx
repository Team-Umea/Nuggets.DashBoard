import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav>
        <NavLink to="faq"></NavLink>
        <NavLink to="contact"></NavLink>
      </nav>
      <Outlet />
    </>
  );
}
