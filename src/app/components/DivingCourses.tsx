import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DivingCourses() {
  const [active, setActive] = useState<number | null>(null);

  const cards = [
    {
      title: "SCUBA DIVING",
      age: "Age 10+",
      price: "AED 1,200",
      image: "/pool.avif",
      description:
        "Discover the thrill of scuba diving and explore underwater adventures with expert instructors.",
    },
    {
      title: "Technical Diving",
      age: "Age 13+",
      price: "AED 900",
      image: "/1.avif",
      description:
        "Master your breathing and dive deeper with our professional freediving sessions.",
    },
    {
      title: "Freediving",
      age: "Age 6+",
      price: "AED 400",
      image: "/2.webp",
      description:
        "Enjoy beautiful underwater sights with fun and safe snorkelling adventures.",
    },
    {
      title: "Swimming",
      age: "Age 6+",
      price: "AED 400",
      image: "/pool.avif",
      description:
        "Safe and exciting diving experiences specially designed for children.",
    },
    {
      title: "Snorkelling",
      age: "Age 15+",
      price: "AED 1,500",
      image: "/1.avif",
      description:
        "Advanced professional diving sessions for expert divers and deep water explorers.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#6EA0D0]">
      <div className="max-w-[1600px] mx-auto">

        <h2 className="text-center text-5xl font-bold text-white mb-14 leading-tight">
          Choose your{" "}
          <span className="text-cyan-400">
            PATH
          </span>
          : <br />

          <span className="text-2xl font-medium text-white/90">
            Region’s Largest DiveTank | Guaranteed 1:2 (or less) Instructor to Student Ratio | Inhouse Male & Female Instructors
          </span>
        </h2>

        <div className="flex justify-center gap-5 flex-wrap">

          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="w-[260px] h-[620px] rounded-[28px] overflow-hidden bg-[#082544] cursor-pointer"
            >

              {/* IMAGE SECTION */}
              <motion.div
                animate={{
                  height: active === index ? "42%" : "100%",
                }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
                  {card.age}
                </div>

                {/* NORMAL MODE */}
                {active !== index && (
                  <>
                    <div className="absolute bottom-6 left-5">
                      <h3 className="text-white text-[22px] font-bold">
                        {card.title}
                      </h3>

                      <p className="text-sm text-gray-300 mt-2">
                        FROM
                      </p>

                      <p className="text-3xl font-bold text-white">
                        {card.price}
                      </p>
                    </div>

                    <div className="absolute bottom-5 right-5">
                      <div className="w-14 h-14 rounded-full bg-[#0f2747]/80 flex items-center justify-center">
                        <ArrowRight className="text-white" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

              {/* EXPANDED CONTENT */}
              {active === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 h-[58%] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-white text-[22px] font-bold mb-4">
                      {card.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-7 mb-5">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <div className="w-full h-[2px] bg-cyan-400 mb-4 rounded-full" />

                    <p className="text-sm text-gray-300">
                      FROM
                    </p>

                    <p className="text-3xl font-bold text-white">
                      {card.price}
                    </p>
                  </div>
                </motion.div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}