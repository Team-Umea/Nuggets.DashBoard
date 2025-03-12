import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start sm:items-stretch">
            <div className="flex-shrink-0 text-white text-lg mt-1">
              Bitcoin Bros
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-700 text-white" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-700 text-white" : ""
                    }`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/calc"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-700 text-white" : ""
                    }`
                  }
                >
                  Calculate Savings
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-gray-700 text-white" : ""
                    }`
                  }
                >
                  About us
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-gray-700 text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-gray-700 text-white" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/calc"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-gray-700 text-white" : ""
                }`
              }
            >
              Calculate Savings
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-gray-700 text-white" : ""
                }`
              }
            >
              About us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
