import { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (userId === 'kadir70' && password === '12345678') {
        localStorage.setItem('auth', 'true')
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[350px] border border-white/20">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
        />

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-white text-blue-900 font-bold hover:bg-gray-200 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}