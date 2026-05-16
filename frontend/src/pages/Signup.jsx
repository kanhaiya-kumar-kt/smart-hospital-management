import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";
import { isEmailValid, isPasswordStrong } from "../utils/validators";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    birthDate: "",
    bloodGroup: "",
    gender: "",
    roles: [],
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "roles") {
      let updatedRoles = [...form.roles];

      if (checked) {
        updatedRoles.push(value);
      } else {
        updatedRoles = updatedRoles.filter((r) => r !== value);
      }

      setForm({ ...form, roles: updatedRoles });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isEmailValid(form.username)) {
      return setMessage("Invalid email format");
    }

    if (!isPasswordStrong(form.password)) {
      return setMessage("Password must be at least 4 characters");
    }

    if (form.roles.length === 0) {
      return setMessage("Select at least one role");
    }

    try {
      setLoading(true);

      const res = await signupUser(form);

      setMessage(`Signup successful! User ID: ${res.data.id}`);

      setForm({
        username: "",
        password: "",
        name: "",
        birthDate: "",
        bloodGroup: "",
        gender: "",
        roles: [],
      });

      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

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
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
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

        {/* Birth Date */}
        <input
          type="date"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
          required
        />

        {/* Blood Group */}
        <select
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A_POSITIVE">A+</option>
          <option value="B_POSITIVE">B+</option>
          <option value="O_POSITIVE">O+</option>
          <option value="AB_POSITIVE">AB+</option>
        </select>

        {/* Gender */}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <div className="roles">
          <label>
            <input
              type="checkbox"
              name="roles"
              value="ADMIN"
              checked={form.roles.includes("ADMIN")}
              onChange={handleChange}
            />
            Admin
          </label>

          <label>
            <input
              type="checkbox"
              name="roles"
              value="DOCTOR"
              checked={form.roles.includes("DOCTOR")}
              onChange={handleChange}
            />
            Doctor
          </label>

          <label>
            <input
              type="checkbox"
              name="roles"
              value="PATIENT"
              checked={form.roles.includes("PATIENT")}
              onChange={handleChange}
            />
            Patient
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

      </form>

      {message && <p className="message">{message}</p>}

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
}