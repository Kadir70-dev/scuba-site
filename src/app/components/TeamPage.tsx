import { motion } from "framer-motion";

const team = [
  {
    role: "Founder",
    name: "ISlAM",
    // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    role: "Co-Founder",
    name: "SNEHA",
    // image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
  },
  {
    role: "Lead Instructor",
    name: "Rahul Mehta",
    // image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600",
  },
  {
    role: "Dive Master",
    name: "Ali Hassan",
    // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
  },
  {
    role: "Instructor",
    name: "Sara Khan",
    // image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600",
  },
  {
    role: "Operations",
    name: "Ahmed Raza",
    // image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
  },
  {
    role: "Admin",
    name: "Fatima Noor",
    // image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
];

export function TeamPage() {
  return (
        <section className="relative min-h-screen py-32 bg-[#18476D] overflow-hidden font-habara">
      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Meet <span className="text-cyan-300">Our Team</span>
          </h2>

          <p className="text-white/70 mt-4 text-lg">
            The people behind your underwater journey
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="
                group relative
                rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-xl
                border border-white/20
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={member.image}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
              </div>

              {/* INFO */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-cyan-300 text-sm mt-1">
                  {member.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}