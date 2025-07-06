import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./pages/auth/Login";

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
