import { motion } from 'framer-motion';

const cards = [
  {
    title: 'ADVANCE FINNING',
    image: '/img1.jpeg',
    description: `"Move effortlessly. Breathe less. Disturb nothing."

• Improve movement efficiency  
• Reduce air consumption  
• Navigate tight spaces`,
  },
  {
    title: 'ADVANCE BUOYANCY',
    image: '/img2.jpeg',
    description: `"Stop fighting the water."

• Hover motionless  
• Perfect trim  
• Protect reefs`,
  },
  {
    title: 'SWITCH TO DIR',
    image: '/img3.jpeg',
    description: `"Dive smarter."

• Streamlined gear  
• Better teamwork`,
  },
  {
    title: 'OVERCOME WATER PHOBIA',
    image: '/img4.jpeg',
    description: `"Build confidence."

• Private sessions  
• Step-by-step learning`,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45] overflow-hidden font-habara">

      {/* GLOW EFFECT */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1800px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-6xl font-bold text-white mb-4">
            DiveCampus <span className="text-cyan-300">EXCLUSIVES</span>
          </h2>

          <p className="text-white/80 text-xl">
            This is not about certification. This is true mastery.
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="
                group relative
                w-[280px] h-[400px]
                overflow-hidden
                cursor-pointer
                rounded-[24px]
                backdrop-blur-xl
                bg-white/10
                border border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                transition-all duration-500
                hover:border-cyan-300
                hover:bg-white/15
              "
            >
              {/* IMAGE */}
              <img
                src={card.image}
                className="
                  absolute inset-0
                  w-full h-full object-cover
                  transition-all duration-500
                  group-hover:opacity-0
                  group-hover:scale-110
                "
              />

              {/* HOVER BG */}
              <div className="
                absolute inset-0
                bg-[#02131d]
                opacity-0
                group-hover:opacity-100
                transition-all duration-500
              " />

              {/* TITLE */}
              <div className="
                absolute bottom-6 left-6 z-20
                group-hover:opacity-0
                transition
              ">
                <h3 className="text-2xl font-bold text-white">
                  {card.title}
                </h3>
              </div>

              {/* CONTENT */}
              <div className="
                absolute inset-0 z-30
                opacity-0
                group-hover:opacity-100
                transition-all duration-500
                flex flex-col justify-center
                px-6
                overflow-y-auto
              ">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">
                  {card.title}
                </h3>

                <p className="text-white/80 text-sm whitespace-pre-line">
                  {card.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}