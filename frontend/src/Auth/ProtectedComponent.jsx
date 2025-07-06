import { Route, Routes } from "react-router-dom";
import Profile from "../pages/auth/Profile";
import EditProfile from "../pages/auth/EditProfile";
import CreateEbook from "../pages/EbookProcess/process/create/CreateEbook";
import FlipbookPreview from "../pages/EbookProcess/process/view/FlipbookPreview";
import QrDisplay from "../pages/EbookProcess/process/view/QrDisplay";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UserList from "../pages/Admin/UserList";
import MyEbooks from "../pages/user/MyEbooks";
import ManageEbooks from "../pages/Admin/ManageEbooks";

function ProtectedComponent() {
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        {/* admin  */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/manageebooks" element={<ManageEbooks />} />
        {/* for party use */}
        <Route path="/createebook" element={<CreateEbook />} />
        <Route path="/flipbookpreview" element={<FlipbookPreview />} />
        <Route path="/qrdisplay" element={<QrDisplay />} />
        <Route path="/myebooks" element={<MyEbooks />} />
      </Routes>
    </>
  );
}

export default ProtectedComponent;
