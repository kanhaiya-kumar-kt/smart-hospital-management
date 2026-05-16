import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {

  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8080/api/v1/patients/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(res.data);

      } catch (err) {
        setError("Failed to load profile ❌");
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={containerStyle}>
      <h2>Patient Profile</h2>

      <div style={cardStyle}>
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Gender:</strong> {profile.gender || "Not Provided"}</p>
        <p><strong>Birth Date:</strong> {profile.birthDate || "Not Provided"}</p>
        <p><strong>Blood Group:</strong> {profile.bloodGroup || "Not Provided"}</p>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  marginTop: "60px"
};

const cardStyle = {
  margin: "auto",
  marginTop: "30px",
  padding: "20px",
  maxWidth: "400px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  backgroundColor: "#f9f9f9"
};
