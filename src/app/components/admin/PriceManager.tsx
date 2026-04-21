import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PriceManager() {
  const navigate = useNavigate();

  // 🔐 AUTH CHECK
  useEffect(() => {
    const isAuth = localStorage.getItem("priceAuth");

    console.log("Checking price auth:", isAuth);

    if (!isAuth) {
      navigate("/admin/price-login");
    }
  }, [navigate]);

  const [prices, setPrices] = useState([
    {
      id: 1,
      name: "Beginner Open Water",
      monthly: "999",
      quarterly: "2499",
      yearly: "7999",
    },
    {
      id: 2,
      name: "Advanced Diving",
      monthly: "1299",
      quarterly: "2999",
      yearly: "9999",
    },
    {
      id: 3,
      name: "Rescue Diver",
      monthly: "1499",
      quarterly: "3499",
      yearly: "11999",
    },
  ]);

  const handleChange = (id: number, field: string, value: string) => {
    console.log("Updating:", id, field, value);

    setPrices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSave = () => {
    console.log("🔥 FINAL UPDATED PRICES:", prices);
    alert("Prices updated (UI only)");
  };

  const handleLogout = () => {
    localStorage.removeItem("priceAuth");
    navigate("/admin/price-login");
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">
          💰 Price Management Panel
        </h1>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
          >
            <Save size={18} />
            Save
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4">Course</th>
              <th className="p-4">Monthly</th>
              <th className="p-4">Quarterly</th>
              <th className="p-4">Yearly</th>
            </tr>
          </thead>

          <tbody>
            {prices.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4 font-semibold">{item.name}</td>

                <td className="p-4">
                  <input
                    value={item.monthly}
                    onChange={(e) =>
                      handleChange(item.id, "monthly", e.target.value)
                    }
                    className="w-full p-2 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-400 outline-none"
                  />
                </td>

                <td className="p-4">
                  <input
                    value={item.quarterly}
                    onChange={(e) =>
                      handleChange(item.id, "quarterly", e.target.value)
                    }
                    className="w-full p-2 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-400 outline-none"
                  />
                </td>

                <td className="p-4">
                  <input
                    value={item.yearly}
                    onChange={(e) =>
                      handleChange(item.id, "yearly", e.target.value)
                    }
                    className="w-full p-2 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-400 outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD VIEW */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {prices.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-300">
              {item.name}
            </h3>

            <p className="text-white/70">Monthly: {item.monthly} AED</p>
            <p className="text-white/70">Quarterly: {item.quarterly} AED</p>
            <p className="text-white/70">Yearly: {item.yearly} AED</p>
          </div>
        ))}
      </div>
    </div>
  );
}