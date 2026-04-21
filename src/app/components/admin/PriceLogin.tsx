import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PriceLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Price Manager Login Attempt");

    // 🔥 DIFFERENT CREDENTIALS
    if (username === "priceadmin" && password === "999999") {
      console.log("Price Login success");

      localStorage.setItem("priceAuth", "true");

      navigate("/admin/prices");
    } else {
      console.log("Price Login failed");
      alert("Invalid Price Manager credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0a0e27] text-white">

      <div className="p-8 rounded-2xl w-[320px] backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl">

        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">
          💰 Price Manager Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}