import { useState } from "react";
import axios from "axios";

export default function AppointmentPage() {

  const [form, setForm] = useState({
    doctorId: "",
    patientId: "",
    appointmentTime: "",
    reason: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8080/api/v1/patients/appointments",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Appointment Created Successfully ✅");
      console.log(res.data);

    } catch (err) {
      setMessage("Error creating appointment ❌");
      console.error(err);
    }
  };

  return (

    <div style={containerStyle}>

      <div style={cardStyle}>

        <h2 style={titleStyle}>Create Appointment</h2>

        <form onSubmit={handleSubmit} style={formStyle}>

          <input
            type="number"
            name="doctorId"
            placeholder="Doctor ID"
            value={form.doctorId}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="patientId"
            placeholder="Patient ID"
            value={form.patientId}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="datetime-local"
            name="appointmentTime"
            value={form.appointmentTime}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="reason"
            placeholder="Reason"
            value={form.reason}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Appointment
          </button>

        </form>

        {message && <p style={messageStyle}>{message}</p>}

      </div>

    </div>
  );
}


const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#74ebd5,#ACB6E5)"
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  width: "400px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#333"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#4a90e2",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.2s"
};

const messageStyle = {
  marginTop: "15px",
  textAlign: "center",
  fontWeight: "bold"
};