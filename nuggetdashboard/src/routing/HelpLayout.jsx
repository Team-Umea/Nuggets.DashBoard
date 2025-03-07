import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav>
        <NavLink
          to="faq"
          className={
            "bg-blue-700 p-2 rounded-lg text-white hover:bg-blue-700/70 m-4"
          }
        >
          FAQ
        </NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
