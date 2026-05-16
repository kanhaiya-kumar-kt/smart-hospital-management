import { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [showPatients, setShowPatients] = useState(false);
  const [showDoctors, setShowDoctors] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [showDoctorForm, setShowDoctorForm] = useState(false);

  const [doctor, setDoctor] = useState({
    name: "",
    userId: "",
    specialization: "",
    email: ""
  });

  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // ===============================
  // Fetch Patients
  // ===============================

  const fetchPatients = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/v1/admin/patients",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPatients(res.data);
      setShowPatients(true);
      setShowDoctors(false);
      setShowAppointments(false);

    } catch (err) {

      console.error(err);
      alert("Failed to load patients");

    }

  };


  // ===============================
  // Fetch Doctors
  // ===============================

  const fetchDoctors = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/v1/public/doctors"
      );

      setDoctors(res.data);
      setShowDoctors(true);
      setShowPatients(false);
      setShowAppointments(false);

    } catch (err) {

      console.error(err);
      alert("Failed to load doctors");

    }

  };


  // ===============================
  // Fetch Appointments
  // ===============================

  const fetchAppointments = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/v1/doctors/appointments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppointments(res.data);
      setShowAppointments(true);
      setShowDoctors(false);
      setShowPatients(false);

    } catch (err) {

      console.error(err);
      alert("Failed to load appointments");

    }

  };


  // ===============================
  // Handle Doctor Form Input
  // ===============================

  const handleDoctorChange = (e) => {

    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });

  };


  // ===============================
  // Add Doctor API
  // ===============================

  const addDoctor = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/v1/admin/onBoardNewDoctor",
        doctor,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Doctor added successfully!");

      setDoctor({
        name: "",
        userId: "",
        specialization: "",
        email: ""
      });

    } catch (err) {

      console.error(err);
      setMessage("Failed to add doctor");

    }

  };


  return (

    <div style={{ padding: "40px" }}>

      <h2>Admin Dashboard</h2>

      {/* ======================
          Buttons
      ====================== */}

      <button
        onClick={fetchPatients}
        style={btnBlue}
      >
        View Patients
      </button>

      <button
        onClick={fetchDoctors}
        style={btnPurple}
      >
        View Doctors
      </button>

      <button
        onClick={fetchAppointments}
        style={btnOrange}
      >
        See Appointments
      </button>

      <button
        onClick={() => setShowDoctorForm(!showDoctorForm)}
        style={btnGreen}
      >
        Add New Doctor
      </button>


      {/* ======================
          Add Doctor Form
      ====================== */}

      {showDoctorForm && (

        <form onSubmit={addDoctor} style={{ marginTop: "25px" }}>

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={doctor.name}
            onChange={handleDoctorChange}
            required
          />

          <br /><br />

          <input
            type="number"
            name="userId"
            placeholder="User ID"
            value={doctor.userId}
            onChange={handleDoctorChange}
            required
          />

          <br /><br />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={doctor.specialization}
            onChange={handleDoctorChange}
            required
          />

          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Doctor Email"
            value={doctor.email}
            onChange={handleDoctorChange}
            required
          />

          <br /><br />

          <button type="submit">Submit</button>

        </form>

      )}

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}


      {/* ======================
          Patient Table
      ====================== */}

      {showPatients && (

        <table border="1" cellPadding="10" style={{ marginTop: "30px" }}>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Date</th>
              <th>Blood Group</th>
            </tr>
          </thead>

          <tbody>

            {patients.map((p) => (

              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.gender}</td>
                <td>{p.birthDate}</td>
                <td>{p.bloodGroup}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}


      {/* ======================
          Doctor Table
      ====================== */}

      {showDoctors && (

        <table border="1" cellPadding="10" style={{ marginTop: "30px" }}>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>

            {doctors.map((d) => (

              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.specialization}</td>
                <td>{d.email}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}


      {/* ======================
          Appointment Table
      ====================== */}

      {showAppointments && (

        <table border="1" cellPadding="10" style={{ marginTop: "30px" }}>

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

const btnBlue = {
  padding: "10px 20px",
  background: "#1976d2",
  color: "white",
  border: "none",
  marginRight: "10px",
  cursor: "pointer"
};

const btnPurple = {
  padding: "10px 20px",
  background: "#6a1b9a",
  color: "white",
  border: "none",
  marginRight: "10px",
  cursor: "pointer"
};

const btnOrange = {
  padding: "10px 20px",
  background: "#ff9800",
  color: "white",
  border: "none",
  marginRight: "10px",
  cursor: "pointer"
};

const btnGreen = {
  padding: "10px 20px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  cursor: "pointer"
};