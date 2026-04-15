import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DivingCourses() {
  const [active, setActive] = useState<number | null>(null);

  const cards = [
    {
      title: "SCUBA DIVING",
      age: "AGE 10+",
      price: "AED 1,200",
      image: "/pool.avif",
      description:
        "DISCOVER THE THRILL OF SCUBA DIVING AND EXPLORE UNDERWATER ADVENTURES WITH EXPERT INSTRUCTORS.",
    },
    {
      title: "TECHNICAL DIVING",
      age: "AGE 13+",
      price: "AED 900",
      image: "/1.avif",
      description:
        "MASTER YOUR BREATHING AND DIVE DEEPER WITH OUR PROFESSIONAL SESSIONS.",
    },
    {
      title: "FREEDIVING",
      age: "AGE 6+",
      price: "AED 400",
      image: "/2.webp",
      description:
        "EXPERIENCE CALM AND CONTROL WHILE EXPLORING THE UNDERWATER WORLD.",
    },
    {
      title: "SWIMMING",
      age: "AGE 6+",
      price: "AED 400",
      image: "/pool.avif",
      description:
        "SAFE AND EXCITING TRAINING DESIGNED FOR BEGINNERS AND KIDS.",
    },
    {
      title: "SNORKELLING",
      age: "AGE 15+",
      price: "AED 1,500",
      image: "/1.avif",
      description:
        "EXPLORE VIBRANT MARINE LIFE IN SHALLOW WATERS WITH GUIDED TOURS.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#18476D] font-habara">
      <div className="max-w-[1600px] mx-auto font-habara">

        {/* HEADING */}
        <h2 className="text-center text-5xl font-bold text-white mb-14 leading-tight uppercase tracking-wide font-habara">
          CHOOSE YOUR{" "}
          <span className="text-cyan-300">
            PATH
          </span>
          <br />

          <span className="text-xl font-medium text-white/80 tracking-wide">
            REGION’S LARGEST DIVETANK | GUARANTEED 1:2 INSTRUCTOR RATIO | INHOUSE INSTRUCTORS
          </span>
        </h2>

        {/* CARDS */}
        <div className="flex justify-center gap-5 flex-wrap font-habara">

          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="
                w-[260px] h-[620px]
                rounded-[28px]
                overflow-hidden
                bg-[#0f2f4d]
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                transition-all duration-300
                font-habara
              "
            >

              {/* IMAGE */}
              <motion.div
                animate={{
                  height: active === index ? "42%" : "100%",
                }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <img
                  src={card.image}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full font-habara uppercase tracking-wide">
                  {card.age}
                </div>

                {active !== index && (
                  <>
                    <div className="absolute bottom-6 left-5">
                      <h3 className="text-white text-[22px] font-bold uppercase tracking-wide">
                        {card.title}
                      </h3>

                      <p className="text-sm text-white/70 mt-2 uppercase tracking-wide">
                        FROM
                      </p>

                      <p className="text-3xl font-bold text-cyan-300 uppercase">
                        {card.price}
                      </p>
                    </div>

                    <div className="absolute bottom-5 right-5">
                      <div className="w-14 h-14 rounded-full bg-[#18476D]/80 flex items-center justify-center">
                        <ArrowRight className="text-white" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

              {/* EXPANDED */}
              {active === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-5 h-[58%] flex flex-col justify-between font-habara"
                >
                  <div>
                    <h3 className="text-white text-[22px] font-bold mb-4 uppercase tracking-wide">
                      {card.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-7 mb-5 uppercase tracking-wide">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <div className="w-full h-[2px] bg-cyan-300 mb-4 rounded-full" />

                    <p className="text-sm text-white/60 uppercase tracking-wide">
                      FROM
                    </p>

                    <p className="text-3xl font-bold text-cyan-300 uppercase">
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