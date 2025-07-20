import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaRegClock, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <nav className="navbar-custom green-theme">
        <div className="navbar-container">
          <button
            className="mobile-toggle"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="logo-section">
            <NavLink to="/" className="animated-logo">
              Alexashishvivekchauhan
            </NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-item-link">
                <FaHome style={{ color: "green" }} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="nav-item-link">
                <FaProjectDiagram style={{ color: "blue" }} /> Project
              </NavLink>
            </li>
          </ul>

          <div className="clock-section">
            <FaRegClock className="me-2" />
            <span>{currentTime.toLocaleTimeString()}</span>
            <span>|</span>
            <span>{currentTime.toLocaleDateString()}</span>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open green-theme" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              <FaHome style={{ color: "green" }} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="nav-item-link">
              <FaProjectDiagram style={{ color: "blue" }} /> Project
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
