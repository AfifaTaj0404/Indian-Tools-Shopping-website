// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "../utils/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Runs when app loads (page refresh)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      fetchUser();
    }
  }, []);

  // Get logged in user from backend
  const fetchUser = async () => {
    try {
      const res = await axios.get("/auth/me"); 
      // token is automatically attached by axios interceptor

      setUser(res.data.user || res.data);
      setIsLoggedIn(true);
    } catch (err) {
      console.log("Auth error:", err.response?.data);
      logout();
    }
  };

  // Call this after successful login
  const login = (data) => {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    setUser(data.user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};






