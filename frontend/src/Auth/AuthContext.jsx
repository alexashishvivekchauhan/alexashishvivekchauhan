import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈 for redirect
  const [logoutTimer, setLogoutTimer] = useState(null); // 👈 to store timeout reference

  const setAutoLogout = (exp) => {
    const expiryTime = exp * 1000;
    const currentTime = Date.now();
    const timeout = expiryTime - currentTime;

    if (timeout > 0) {
      const timer = setTimeout(() => {
        logout();
      }, timeout);
      setLogoutTimer(timer);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const expiryTime = decoded.exp * 1000;
      const currentTime = Date.now();

      if (expiryTime < currentTime) {
        logout();
      } else {
        setUser({
          id: decoded.id,
          name: decoded.name,
          role: decoded.role,
          token,
        });
        setAutoLogout(decoded.exp); // 👈 set logout timer
      }
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
    }

    setLoading(false);

    // Clear timeout on unmount
    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
    };
  }, []);

  const login = async (phone, password) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        phone,
        password,
      });

      const { token, name } = response.data;
      const decoded = jwtDecode(token);

      const userData = {
        id: decoded.id,
        name: name || decoded.name,
        role: decoded.role,
        token,
      };

      setUser(userData);
      localStorage.setItem("token", token);
      setAutoLogout(decoded.exp); // 👈 set logout timer

      return userData;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw new Error("Login failed");
    }
  };

  const signup = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    if (logoutTimer) clearTimeout(logoutTimer); // 👈 clear any existing timer
    navigate("/login"); // 👈 redirect to login
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
