import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuth} from "../../Auth/AuthContext";

function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    profile: null,
  });
  const [preview, setPreview] = useState(null);

  // Fetch user data
  async function userprofile() {
    try {
      const res = await axios.get("http://localhost:4000/auth");
      const allUsers = res.data;
      const matchedUser = allUsers.find((u) => u._id === user?.id);
      setFormData({
        name: matchedUser.name || "",
        email: matchedUser.email || "",
        phone: matchedUser.phone || "",
        password: matchedUser.password,
        address: matchedUser.address || "",
        profile: null,
      });
      setPreview(
        matchedUser.profile
          ? `http://localhost:4000/profile/${matchedUser.profile}`
          : null
      );
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  useEffect(() => {
    if (user?.id) {
      userprofile();
    }
  }, [user?.id]);

  // Handle form input change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle file selection

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      profile: file,
    }));
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  // Submit updated form
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const updateData = new FormData();
      updateData.append("name", formData.name);
      updateData.append("email", formData.email);
      updateData.append("phone", formData.phone);
      updateData.append("password", formData.password);
      updateData.append("address", formData.address);
      if (formData.profile) {
        updateData.append("profile", formData.profile);
      }

      await axios.put(
        `http://localhost:4000/auth/update/${user.id}`,
        updateData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate(`/protected/${user.id}/profile`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  function handlercancel() {
    navigate(`/protected/${user?.id}/profile`);
  }

  return (
    <div className="container mt-5" style={{ paddingTop: "80px" }}>
      <div className="card shadow p-4">
        <h3 className="text-primary mb-4">✏️ Edit Profile</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Profile Preview */}
            <div className="col-md-4 text-center mb-4">
              <img
                src={preview || "https://via.placeholder.com/150?text=No+Image"}
                alt="Preview"
                className="img-thumbnail rounded-circle shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <input
                type="file"
                className="form-control mt-2"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Input Fields */}
            <div className="col-md-8">
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                ></textarea>
              </div>
              <div className="text-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={handlercancel}
                >
                  Cancel
                </button>
                <button className="btn btn-success" type="submit">
                  ✅ Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
