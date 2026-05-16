import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Hospital Management System</h1>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Login
        </button>

        <button style={styles.button} onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  buttonGroup: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
