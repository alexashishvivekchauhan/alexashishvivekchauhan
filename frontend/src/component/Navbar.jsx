import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaRegClock,
  FaUserFriends,
  FaUserPlus,
  FaUserCircle,
  FaTools,
  FaHome,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthContext";

function Navbar() {
  const nav = useNavigate();
  const { logout, isAuthenticated, user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    nav("/");
  };

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

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
              AAVRC
            </NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-item-link">
                <FaHome /> Home
              </NavLink>
            </li>
            {(isUser || isAdmin) && (
              <li>
                <NavLink to="/" className="nav-item-link">
                  <FaTools /> Dashboard
                </NavLink>
              </li>
            )}
            <li className="dropdown">
              <div className="dropdown-toggle">
                <FaUserFriends />
                {isAdmin ? `Hello, Admin` : isUser ? `Hello, User` : "Account"}
                <FaChevronDown className="chevron-icon" />
              </div>
              <ul className="dropdown-menu">
                {!isAuthenticated && (
                  <li>
                    <NavLink to="/login" className="dropdown-item">
                      <FaUserCircle /> Login
                    </NavLink>
                  </li>
                )}
                {isAuthenticated && (
                  <>
                    <li>
                      <NavLink to="/" className="dropdown-item">
                        <FaUserCircle /> Profile
                      </NavLink>
                    </li>
                    {isAdmin && (
                      <li>
                        <NavLink
                          to="/signup/evermore-indigo17"
                          className="dropdown-item"
                        >
                          <FaUserPlus /> Add User
                        </NavLink>
                      </li>
                    )}
                  </>
                )}
              </ul>
            </li>
            {isAuthenticated && (
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            )}
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
              <FaHome /> Home
            </NavLink>
          </li>
          {(isUser || isAdmin) && (
            <li>
              <NavLink to="/" onClick={() => setSidebarOpen(false)}>
                <FaTools /> Dashboard
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink to="/login" onClick={() => setSidebarOpen(false)}>
                <FaUserCircle /> Login
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <>
              <li>
                <NavLink to="/" onClick={() => setSidebarOpen(false)}>
                  <FaUserCircle /> Profile
                </NavLink>
              </li>
              {isAdmin && (
                <li>
                  <NavLink
                    to="/signup/evermore-indigo17"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <FaUserPlus /> Add User
                  </NavLink>
                </li>
              )}
              <li>
                <button
                  className="logout-btn"
                  onClick={() => {
                    handleLogout();
                    setSidebarOpen(false);
                  }}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
