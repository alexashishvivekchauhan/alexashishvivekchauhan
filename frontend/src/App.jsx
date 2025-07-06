import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./pages/auth/Login";
import {AuthProvider} from "./Auth/AuthContext";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./Auth/ProtectedRoutes";
import ProtectedComponent from "./Auth/ProtectedComponent";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />

        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route
          path="/protected/:id/*"
          element={
            <ProtectedRoute>
              <ProtectedComponent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
