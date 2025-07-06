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
import logo from "../images/logo/logo.png";

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
      {/* Top Navbar */}
      <nav className="navbar-custom">
        <button
          className="mobile-toggle"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo-section">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        {/* menues */}
        <div className="menu-section">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-item-link">
                <FaHome style={{ color: "green" }} /> Home
              </NavLink>
            </li>

            {isUser && (
              <>
                <NavLink
                  to={`/protected/${user?.id}/admindashboard`}
                  className="nav-item-link"
                >
                  <FaTools style={{ color: "blue" }} /> Dashboard
                </NavLink>
              </>
            )}

            {isAdmin && (
              <li>
                <NavLink
                  to={`/protected/${user?.id}/admindashboard`}
                  className="nav-item-link"
                >
                  <FaTools style={{ color: "blue" }} /> Dashboard
                </NavLink>
              </li>
            )}

            {/* Hover-only Dropdown */}
            <li className="dropdown">
              <div className="dropdown-ttoggle">
                <FaUserFriends style={{ color: "grey" }} />
                {isAdmin ? `Hello, Admin` : isUser ? `Hello, User` : "Account"}
                <FaChevronDown className="chevron-icon" />
              </div>

              <ul className="dropdown-menu">
                {!isAuthenticated && (
                  <>
                    <li>
                      <NavLink to="/login" className="dropdown-item">
                        <FaUserCircle /> Login
                      </NavLink>
                    </li>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <li>
                      <NavLink
                        to={`/protected/${user?.id}/profile`}
                        className="dropdown-item"
                      >
                        <FaUserCircle /> Profile
                      </NavLink>
                    </li>
                    {isAdmin && (
                      <li>
                        <NavLink
                          to="/signup/Alex2235vrc"
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
                  <FaSignOutAlt style={{ color: "red" }} /> Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className="clock-section">
          <FaRegClock className="me-2" />
          {currentTime.toLocaleTimeString()} |{" "}
          {currentTime.toLocaleDateString()}
        </div>
      </nav>

      {/* Sidebar for mobile only */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              <FaHome /> Home
            </NavLink>
          </li>

          {isUser && (
            <>
              <li>
                <NavLink
                  to={`/protected/${user?.id}/admindashboard`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaTools /> Dashboard
                </NavLink>
              </li>
            </>
          )}

          {isAdmin && (
            <li>
              <NavLink
                to={`/protected/${user?.id}/admindashboard`}
                onClick={() => setSidebarOpen(false)}
              >
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
                <NavLink
                  to={`/protected/${user?.id}/profile`}
                  onClick={() => setSidebarOpen(false)}
                >
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
