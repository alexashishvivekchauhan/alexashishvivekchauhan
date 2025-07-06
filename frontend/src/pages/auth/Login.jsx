import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import "./Login.css";

function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [err, seterr] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const loggedInUser = await login(phone, password);
      nav(`/protected/${loggedInUser.id}/profile`);
    } catch (error) {
      seterr("📛 Invalid phone or password!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card animated-slide">
        <h3 className="login-title">📚 Login to Evermore</h3>

        {err && (
          <div className="login-error animated-fade">
            <p>{err}</p>
          </div>
        )}

        <form onSubmit={submit}>
          <div className="form-group mb-3">
            <input
              onChange={(e) => setphone(e.target.value)}
              type="text"
              className="form-control login-input"
              value={phone}
              placeholder="📱 Phone Number"
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="form-control login-input"
              value={password}
              placeholder="🔐 Password"
              required
            />
          </div>

          <button type="submit" className="btn login-btn w-100">
            🔓 Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
