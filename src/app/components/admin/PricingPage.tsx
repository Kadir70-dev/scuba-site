"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getPricing, updatePricing } from "@/services/pricingService";

export function PricingPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [temp, setTemp] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const { data } = await getPricing();
    setPackages(data || []);
    setTemp(data || []);
  };

  // CHANGE
  const handleChange = (id: string, field: string, value: any) => {
    setTemp((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  // SAVE
const handleSave = async (id: string) => {
  const updated = temp.find((p) => p.id === id);

  console.log("🚀 TRY SAVE:", updated);

  const payload = {
    name: updated?.name || "",
    description: updated?.description || "",
    price: updated?.price || "",
    features: updated?.features || [],
    popular: updated?.popular || false,
    position: updated?.position || 1,
  };

  const { data, error } = await updatePricing(id, payload);

  console.log("✅ UPDATE DATA:", data);
  console.log("❌ FULL ERROR:", JSON.stringify(error, null, 2));

  if (error) {
    alert("❌ Save failed");
    return;
  }

  alert("✅ Saved");

  setEditingId(null);
  load();
};

  // CANCEL
  const handleCancel = () => {
    setTemp(packages);
    setEditingId(null);
  };

  return (
    <section className="relative py-32 overflow-hidden font-habara">

      {/* ADMIN */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="absolute top-6 right-6 bg-white/20 text-white px-3 py-1 rounded"
      >
        {isAdmin ? "Exit Admin" : "Admin"}
      </button>

      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {temp.map((pkg) => {
            const isEditing = editingId === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -10 }}
                className={`relative ${
                  isEditing ? "ring-2 ring-cyan-300" : ""
                }`}
              >

                {/* POPULAR */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-3 py-1 text-xs rounded-full flex gap-1">
                    <Sparkles size={12} /> Popular
                  </div>
                )}

                <div className="bg-white/10 p-6 rounded-xl border border-white/20">

                  {/* NAME */}
                  {isEditing ? (
                    <input
                      value={pkg.name}
                      onChange={(e) =>
                        handleChange(pkg.id, "name", e.target.value)
                      }
                      className="w-full bg-black/40 text-white p-1 rounded"
                    />
                  ) : (
                    <h3
                      onClick={() => isAdmin && setEditingId(pkg.id)}
                      className="text-white cursor-pointer"
                    >
                      {pkg.name}
                    </h3>
                  )}

                  {/* DESCRIPTION */}
                  {isEditing ? (
                    <textarea
                      value={pkg.description}
                      onChange={(e) =>
                        handleChange(pkg.id, "description", e.target.value)
                      }
                      className="w-full bg-black/40 text-white mt-2 p-1 rounded"
                    />
                  ) : (
                    <p className="text-white/50 mt-2">
                      {pkg.description}
                    </p>
                  )}

                  {/* PRICE */}
                  {isEditing ? (
                    <input
                      value={pkg.price}
                      onChange={(e) =>
                        handleChange(pkg.id, "price", e.target.value)
                      }
                      className="bg-black/40 text-cyan-300 mt-3 p-1 rounded"
                    />
                  ) : (
                    <div
                      onClick={() => isAdmin && setEditingId(pkg.id)}
                      className="text-3xl text-cyan-300 mt-3 cursor-pointer"
                    >
                      ${pkg.price}
                    </div>
                  )}

                  {/* FEATURES */}
                  <ul className="mt-4 space-y-1">
                    {pkg.features?.map((f: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <Check className="text-cyan-300 w-4 h-4" />
                        {isEditing ? (
                          <input
                            value={f}
                            onChange={(e) => {
                              const updated = [...pkg.features];
                              updated[i] = e.target.value;
                              handleChange(pkg.id, "features", updated);
                            }}
                            className="bg-black/40 text-white px-1 rounded w-full"
                          />
                        ) : (
                          <span className="text-white text-sm">
                            {f}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <button className="w-full mt-4 py-2 border rounded text-white">
                    Get Started
                  </button>

                  {/* ACTIONS */}
                  {isAdmin && isEditing && (
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleSave(pkg.id)}
                        className="bg-green-400 px-2 py-1 text-black rounded"
                      >
                        Save
                      </button>

                      <button
                        onClick={handleCancel}
                        className="bg-red-500 px-2 py-1 text-white rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}