import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthContext";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";
  const [fuser, setFuser] = useState("");
  const handleEdit = () => {
    navigate(`/protected/${user?.id}/editprofile`);
  };

  async function userprofile() {
    try {
      const res = await axios.get("http://localhost:2000/auth");
      const allUsers = res.data;
      const matchedUser = allUsers.find((u) => u._id === user?.id);
      setFuser(matchedUser);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  useEffect(() => {
    if (user?.id) {
      userprofile();
    }
  }, [user?.id]);

  if (!fuser) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ paddingTop: "80px" }}>
      <div className="card shadow rounded p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-primary">👤 User Profile</h3>
          <button
            className="btn btn-outline-primary"
            onClick={handleEdit}
            disabled={!user}
          >
            ✏️ Edit Profile
          </button>
        </div>

        <div className="row">
          {/* Profile photo */}
          <div className="col-md-4 text-center mb-4">
            <img
              src={
                fuser.profile
                  ? `http://localhost:4000/profile/${fuser.profile}`
                  : "https://via.placeholder.com/150?text=No+Image"
              }
              alt="User Avatar"
              className="img-thumbnail rounded-circle shadow"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p className="mt-2 fw-bold">{fuser.name}</p>
          </div>

          {/* Details */}
          <div className="col-md-8">
            <div className="row">
              {isAdmin && (
                <div className="col-md-6 mb-3">
                  <strong>User ID:</strong>
                  <div className="text-muted">{fuser._id}</div>
                </div>
              )}
              <div className="col-md-6 mb-3">
                <strong>Name:</strong>
                <div className="text-muted">{fuser.name}</div>
              </div>
              {isAdmin && (
                <div className="col-md-6 mb-3">
                  <strong>Role:</strong>
                  <div className="badge bg-info text-dark">{fuser.role}</div>
                </div>
              )}
              <div className="col-md-6 mb-3">
                <strong>Email:</strong>
                <div className="text-muted">{fuser.email}</div>
              </div>
              <div className="col-md-6 mb-3">
                <strong>Phone:</strong>
                <div className="text-muted">{fuser.phone}</div>
              </div>
              <div className="col-md-6 mb-3">
                <strong>Address:</strong>
                <div className="text-muted">{fuser.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
