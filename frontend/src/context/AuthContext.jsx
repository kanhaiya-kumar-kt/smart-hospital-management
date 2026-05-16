// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // 🔥 Load user from localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const roles = JSON.parse(localStorage.getItem("roles"));

    if (token) {
      setUser({
        token,
        userId,
        roles: roles || []
      });
    }
  }, []);

  // ✅ Login (Normal + OAuth)
  const login = (data) => {
    const token = data.jwt || data.token;
    const userId = data.userId || null;
    const roles = data.roles || [];

    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("roles", JSON.stringify(roles));

    setUser({
      token,
      userId,
      roles
    });
  };

  // ✅ Logout
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
