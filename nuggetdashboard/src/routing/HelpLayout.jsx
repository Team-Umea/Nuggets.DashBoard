import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav className="flex justify-center gap-7 mb-4">
        <NavLink
          to="faq"
          className={({ isActive }) =>
            `text-white hover:bg-blue-600 font-bold p-2 rounded-lg border-1 ${
              isActive ? "bg-blue-600" : "bg-blue-900"
            }`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `text-white hover:bg-blue-600 font-bold p-2 rounded-lg border-1 ${
              isActive ? " bg-blue-600" : "bg-blue-900"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
