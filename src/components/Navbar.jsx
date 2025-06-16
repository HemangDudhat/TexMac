import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/FAQ" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-0 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
          <img
            src="/texmac logo.png"
            alt="Texmac Logo"
            className="w-12 h-13 mr-3"
          />
          <div className="flex items-center gap-1">
            <div
              className="text transition-colors duration-200 cursor-pointer gap-2"
              style={{ color: "#540000" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#7a1a1a")}
              onMouseLeave={e => (e.currentTarget.style.color = "#540000")}
            >
              TEXMAC
            </div>
            <div
              className="text transition-colors duration-200 cursor-pointer"
              style={{ color: "#cca160" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#b88a4b")}
              onMouseLeave={e => (e.currentTarget.style.color = "#cca160")}
            >
              AUTOMATION
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#b88a4b]" : "text-gray-600"
                } hover:text-[#b88a4b]`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-[#b88a4b]">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive ? "text-[#b88a4b]" : "text-gray-700"
                } hover:text-[#b88a4b] hover:bg-gray-100`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}