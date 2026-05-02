import { useState } from "react";
import { motion } from "framer-motion";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (userId === "kadir70" && password === "12345678") {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 px-4">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm space-y-4"
      >

        <div className="w-full h-[44px] rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-sm font-semibold shadow">
          🚀 Launching Soon
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20">

          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-5">
            Login
          </h2>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full mb-3 h-[44px] px-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none text-sm sm:text-base"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 h-[44px] px-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none text-sm sm:text-base"
          />

          {error && (
            <p className="text-red-400 text-xs sm:text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="w-full h-[48px] rounded-2xl bg-white text-blue-900 font-bold text-sm sm:text-base"
          >
            Login
          </motion.button>

        </div>

      </motion.div>
    </div>
  );
}