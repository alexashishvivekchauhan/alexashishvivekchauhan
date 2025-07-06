import { Route, Routes } from "react-router-dom";
import Profile from "../pages/auth/Profile";
import EditProfile from "../pages/auth/EditProfile";

function ProtectedComponent() {
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default ProtectedComponent;
