import { useState } from "react";
import { useAuth } from "../../Auth/AuthContext";
import "./Signup.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

function Signup() {
  const location = useLocation();
  const isSecretAccess = location.pathname === "/signup/evermore-indigo17";

  // ⛔ If not accessing through the secret path, redirect to home
  if (!isSecretAccess) {
    return <Navigate to="/" replace />;
  }

  const nav = useNavigate();
  const { signup, user } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    address: "",
    password: "",
  });

  const [alertFail, setAlertFail] = useState("");
  const [preview, setPreview] = useState(null);
  const [profile, setProfile] = useState(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("role", data.role);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("email", data.email || `${data.phone}@gmail.com`);
    if (profile) formData.append("profile", profile);

    try {
      await signup(formData);
      setAlertFail("");
      setData({
        name: "",
        email: "",
        phone: "",
        role: "",
        address: "",
        password: "",
      });
      setProfile(null);
      setPreview(null);
      nav("/login");
    } catch (err) {
      console.error(err);
      setAlertFail("❌ Failed to create user.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-card animated-slide" onSubmit={submit}>
        <h2 className="text-center mb-4">📋 Add New User</h2>
        {alertFail && (
          <div className="alert error animated-fade">{alertFail}</div>
        )}

        <div className="form-group">
          <label>Name(optional)</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Role(optional)</label>
          <input
            type="text"
            placeholder="admin/user default=user"
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="text"
            placeholder="Enter phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Email (optional)</label>
          <input
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Address(optional)</label>
          <input
            type="text"
            placeholder="Enter address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Profile Photo(optional)</label>
          <input type="file" accept="image/*" onChange={handlePhoto} />
          {preview && (
            <img src={preview} alt="Preview" className="profile-preview" />
          )}
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
