// src/admin/AdminLogin.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Trying login...");

    // 🔥 STATIC CREDENTIALS
    if (username === "admin" && password === "123456") {
      console.log("Login success");

      // store login
      localStorage.setItem("adminAuth", "true");

      navigate("/admin/dashboard");
    } else {
      console.log("Login failed");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 bg-white/10 rounded-xl w-[300px]">
        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 bg-black/50"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-black/50"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-400 text-black p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}