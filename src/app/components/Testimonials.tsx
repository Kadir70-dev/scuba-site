import { motion } from "framer-motion";
import { useState } from "react";

export function Testimonials() {
  const [activeMainTab, setActiveMainTab] = useState("training environment");

  // ================= DATA =================

  const trainingData = [
    {
      feature: "Dive Tank",
      others: "Shallow 1.5–2m outdoor pools",
      diveCampus:
        "4m deep indoor tank · temperature controlled · underwater mirror",
    },
    {
      feature: "Location",
      others: "40–60 min travel",
      diveCampus: "Central Dubai · 20–30 min from most areas",
    },
    {
      feature: "Boat Time",
      others: "30–40 min ride", 
      diveCampus: "5–7 min to reef",
    },
  ];

  const instructorData = [
    {
      feature: "Student Ratio",
      others: "3–8 per instructor",
      diveCampus: "Max 2 students per instructor",
    },
    {
      feature: "Instructor Type",
      others: "Freelancers",
      diveCampus: "In-house PADI professionals",
    },
    {
      feature: "Languages",
      others: "Limited",
      diveCampus: "English · Arabic · Hindi · French",
    },
  ];

  const inclusionData = [
    {
      feature: "Gear Quality",
      others: "Low quality / extra charges",
      diveCampus: "Premium gear included",
    },
    {
      feature: "Learning Material",
      others: "Hidden charges",
      diveCampus: "Included in fee",
    },
    {
      feature: "Parking",
      others: "Paid / public",
      diveCampus: "Free parking",
    },
    {
      feature: "Bring a Friend",
      others: "Not included",
      diveCampus: "Free try dive included",
    },
  ];

  // ================= TABLE COMPONENT =================

  const renderTable = (data: any[]) => {
    return (
      <div className="w-full overflow-x-auto flex justify-center font-habara">
        <table className="w-full max-w-5xl border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-white/5">

          {/* HEADER */}
          <thead className="bg-white/5 text-white/70 text-xs uppercase tracking-[2px]">
            <tr>
              <th className="p-5 text-left">Feature</th>
              <th className="p-5 text-center">Others</th>
              <th className="p-5 text-center text-cyan-300">
                Dive Campus
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-white/80 text-sm">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t border-white/10 hover:bg-white/5 transition-all duration-300"
              >
                {/* FEATURE */}
                <td className="p-5 font-medium uppercase tracking-wide">
                  {item.feature}
                </td>

                {/* OTHERS */}
                <td className="p-5 text-center text-red-400">
                  ✕ {item.others}
                </td>

                {/* DIVE CAMPUS */}
                <td className="p-5 text-center">
                  <span className="inline-block px-4 py-2 border border-cyan-400/30 rounded-lg text-cyan-300 bg-cyan-400/10">
                    ✓ {item.diveCampus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ================= UI =================

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45] overflow-hidden font-habara">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1500px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-5xl font-semibold mb-8 text-white uppercase tracking-wide">
          TRAINING QUALITY <span className="text-cyan-300">RAISED.</span>
        </h2>

        <p className="text-center text-lg text-white/70 max-w-5xl mx-auto mb-16 uppercase tracking-wide">
          DON’T FALL FOR SMALL CLASS SIZE AND UNLIMITED TRAINING CLAIMS.
          HERE’S HOW WE DELIVER EXCELLENCE THAT TRULY MATTERS.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          {[
            "TRAINING ENVIRONMENT",
            "INSTRUCTOR QUALITY",
            "INCLUSIONS",
          ].map((item, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveMainTab(item.toLowerCase())}
              className="relative text-sm font-semibold uppercase tracking-[3px] text-white/80 hover:text-white transition"
            >
              {item}

              {activeMainTab === item.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-[3px] bg-cyan-300"
                />
              )}
            </button>
          ))}
        </div>

        {/* TABLE CONTENT */}
        {activeMainTab === "training environment" &&
          renderTable(trainingData)}

        {activeMainTab === "instructor quality" &&
          renderTable(instructorData)}

        {activeMainTab === "inclusions" &&
          renderTable(inclusionData)}

      </div>
    </section>
  );
}