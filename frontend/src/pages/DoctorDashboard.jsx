import { useState } from "react";
import axios from "axios";

export default function DoctorDashboard() {

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
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h2>Doctor Dashboard</h2>

      <button
        onClick={fetchAppointments}
        style={buttonStyle}
      >
        See Appointments
      </button>


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
              <th>Doctor Name</th>
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

const buttonStyle = {
  padding: "12px 25px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};