import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css"

export default function Dashboard() {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const roles = user?.roles || [];

  const isPatient = roles.includes("PATIENT");
  const isDoctor = roles.includes("DOCTOR");
  const isAdmin = roles.includes("ADMIN");

  const [appointments, setAppointments] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false);

  const fetchAppointments = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8080/api/v1/doctors/appointments",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setAppointments(res.data);
      setShowAppointments(true);

    } catch (err) {

      console.error(err);
      alert("Failed to load appointments");

    }

  };

  return (

    <div style={containerStyle}>

      <h2>Dashboard</h2>

      {/* PATIENT FEATURES */}

      {isPatient && (
        <>
          <button
            style={buttonStyle}
            onClick={() => navigate("/appointments")}
          >
            Book Appointment
          </button>

          <button
            style={{ ...buttonStyle, marginTop: "15px" }}
            onClick={() => navigate("/profile")}
          >
            View Profile
          </button>
        </>
      )}


      {/* DOCTOR FEATURE */}

      {isDoctor && (
        <button
          style={{ ...buttonStyle, marginTop: "15px" }}
          onClick={fetchAppointments}
        >
          See Appointments
        </button>
      )}


      {/* ADMIN FEATURE */}

      {isAdmin && (
        <button
          style={{ ...buttonStyle, marginTop: "15px" }}
          onClick={() => navigate("/admin-dashboard")}
        >
          Admin Panel
        </button>
      )}


      {/* APPOINTMENT TABLE */}

      {showAppointments && (

        <table
          border="1"
          cellPadding="10"
          style={{ marginTop: "30px", marginInline: "auto" }}
        >

          <thead>
            <tr>
              <th>ID</th>
              <th>Appointment Time</th>
              <th>Reason</th>
              <th>Doctor</th>
              <th>Specialization</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((a) => (

              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.appointmentTime}</td>
                <td>{a.reason}</td>
                <td>{a.doctor.name}</td>
                <td>{a.doctor.specialization}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );
}


const containerStyle = {
  textAlign: "center",
  marginTop: "100px"
};

const buttonStyle = {
  padding: "12px 25px",
  backgroundColor: "#4a90e2",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};