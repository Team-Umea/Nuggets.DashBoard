import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ikoner för hamburgarmenyn

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Håller tabbningen inom menyn
  useEffect(() => {
    if (isOpen) {
      const focusableElements = menuRef.current.querySelectorAll("a");
      const firstElement = closeButtonRef.current;
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Bitcoin Calculator", path: "/products" },
    { name: "Index Calculator", path: "/calc" },
    { name: "About us", path: "/about" },
  ];

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
                {links.map(({ name, path }) => (
                  <NavLink
                    key={name}
                    to={path}
                    className={({ isActive }) =>
                      `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                        isActive ? "bg-gray-700 text-white" : ""
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              ref={closeButtonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open Menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 text-center">
            {links.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
