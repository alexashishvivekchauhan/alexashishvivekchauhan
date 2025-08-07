import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <nav className="navbar-custom">
        <div className="logo-section">
          <NavLink to="/" className="animated-logo">
            Alexashishvivekchauhan
          </NavLink>
        </div>

        <div className="menu-section">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-item-link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item-link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item-with-dropdown">
              <NavLink to="/products" className="nav-item-link">
                PRODUCTS
              </NavLink>
              <ul className="nav-dropdown-menu">
                <li>
                  <NavLink to="/project" className="dropdown-item">
                    PROJECT
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setSidebarOpen(false)}>
              ABOUT
            </NavLink>
          </li>

          {/* PRODUCTS Dropdown */}
          <li
            className="sidebar-dropdown-toggle"
            onClick={() => setProductsOpen(!isProductsOpen)}
          >
            PRODUCT LIST
            <FaChevronDown
              className={`sidebar-chevron ${isProductsOpen ? "open" : ""}`}
            />
          </li>
          {isProductsOpen && (
            <ul className="sidebar-submenu">
              <li>
                <NavLink to="/products" onClick={() => setSidebarOpen(false)}>
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" onClick={() => setSidebarOpen(false)}>
                  PROJECT
                </NavLink>
              </li>
            </ul>
          )}
          <li>
            <NavLink to="/contact" onClick={() => setSidebarOpen(false)}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
