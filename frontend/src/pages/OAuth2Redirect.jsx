import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function OAuth2Redirect() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      login({ jwt: token });
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return <p style={{ textAlign: "center" }}>Logging you in...</p>;
}
