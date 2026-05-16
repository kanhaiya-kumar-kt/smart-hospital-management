import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OAuth2Redirect from "./pages/OAuth2Redirect";
import Dashboard from "./pages/Dashboard";
import AppointmentPage from "./pages/AppointmentPage";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        {/* <Route path="/patient-dashboard" element={<PatientDashboard />} /> */}
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
