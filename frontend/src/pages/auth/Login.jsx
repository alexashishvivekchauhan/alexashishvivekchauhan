import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../Auth/AuthContext";

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
    <>
      <div className="container-fluid" style={{ marginTop: "60px" }}>
        <div className="login-container">
          <div className="login-card animated-slide">
            <h3 className="login-title">📚 Login</h3>

            {err && (
              <div className="login-error animated-fade">
                <p>{err}</p>
              </div>
            )}

            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  onChange={(e) => setphone(e.target.value)}
                  type="text"
                  className="login-input"
                  value={phone}
                  placeholder="📱 Phone Number"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="login-input"
                  value={password}
                  placeholder="🔐 Password"
                  required
                />
              </div>
              <div className="signup-link-container">
                <NavLink to="/signup" className="signup-link">
                  Don’t have an account? Sign up
                </NavLink>
              </div>

              <button type="submit" className="login-btn">
                🔓 Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
