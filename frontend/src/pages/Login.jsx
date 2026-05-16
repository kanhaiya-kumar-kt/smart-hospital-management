import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import "./login.css";

export default function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    setMessage("");

    try {

      setLoading(true);

      const res = await loginUser(form);

      // Save token and roles in context
      login(res.data);

      const roles = res.data.roles;

      setMessage("Login successful! Redirecting...");

      setTimeout(() => {

        if (roles.includes("ADMIN")) {
          navigate("/admin-dashboard");

        } else if (roles.includes("DOCTOR")) {
          navigate("/doctor-dashboard");

        } else if (roles.includes("PATIENT")) {
          navigate("/dashboard");

        } else {
          navigate("/dashboard");
        }

      }, 1200);

    } catch (err) {

      setMessage(
        err.response?.data?.message || "Invalid credentials"
      );

    } finally {

      setLoading(false);

    }

  };


  // OAuth login redirect
  const socialLogin = () => {
    window.location.href = "http://localhost:8080/api/v1/login";
  };


  return (

    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="username"
          placeholder="Email"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>


      <div className="divider">OR</div>


      <button
        className="social google"
        onClick={socialLogin}
      >
        Login With Another Way
      </button>


      {message && (
        <p className="message">{message}</p>
      )}


      <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="link"
        >
          Signup
        </span>
      </p>

    </div>

  );
}