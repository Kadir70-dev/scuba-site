import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
const cards = [
  {
    title: 'ADVANCE FINNING',
    image:
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200',
    description: `"Move effortlessly. Breathe less. Disturb nothing."

Master advanced finning techniques including frog kicks, back kicks, and helicopter turns for complete underwater control.

• Improve movement efficiency  
• Reduce air consumption  
• Navigate tight spaces confidently`,
  },

  {
    title: 'ADVANCE BUOYANCY',
    image:
      'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=1200',
    description: `"Stop fighting the water. Start moving with it."

Poor buoyancy is the single most common sign of an undertrained diver and the hardest thing to fix alone.

This workshop strips it back to fundamentals and rebuilds your control from the ground up.

• Hover motionless at any depth  
• Ascend & descend in correct trim  
• Eliminate over-weighting and improve BCD usage  
• Protect reefs — never touch the bottom again`,
  },

  {
    title: 'SWITCH TO DIR',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    description: `"Level up to the superior way to dive."

DIR — Doing It Right — is a philosophy as much as a technique.

Developed for cave and technical diving, it helps divers become cleaner, smarter, and more systematic underwater.

• Streamlined gear setup  
• Better team communication  
• Foundation for tec/cave progression`,
  },

  {
    title: 'OVERCOME WATER PHOBIA',
    image:
      'https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1200',
    description: `"Conquer fear. Unlock confidence."

Fear of water is common and treatable with the right guidance.

Work privately with patient instructors using proven exposure techniques.

• Private 1:1 sessions  
• Zero-pressure environment  
• Build confidence step by step  
• Gateway to scuba/freediving`,
  },
  {
    title: 'PRECISION',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    description: `"Precision in every movement."

Develop perfect underwater body awareness and controlled movement.

• Improve stability  
• Better navigation  
• Advanced positioning skills`,
  },

  {
    title: 'FLOW',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    description: `"Flow naturally underwater."

Perfect your movement patterns and become one with the water.

• Smooth transitions  
• Fluid body mechanics  
• Reduced effort underwater`,
  },

  {
    title: 'MASTERY',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200',
    description: `"Reach complete mastery."

Combine all advanced techniques into one elite diving skillset.

• Professional techniques  
• Elite confidence  
• Advanced underwater awareness`,
  },

  {
    title: 'ELITE',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200',
    description: `"Become an elite diver."

Push beyond recreational standards into true underwater excellence.

• Elite mindset  
• Maximum control  
• Superior dive confidence`,
  },
];

const cardsPerPage = 4;

export function WhyChooseUs() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const visibleCards = cards.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="relative py-32 overflow-hidden bg-[#6EA0D0]">

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-24 relative">

          {/* Glow Background */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[120px] bg-cyan-400/20 blur-[100px] rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-200">
              Premium Training Program
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="relative text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            <span className="text-white">DiveCampus </span>

            <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              Excellence
            </span>
          </h2>

          {/* Underline Accent */}
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent mb-6" />

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            This is not about certification.{' '}
            <span className="font-semibold text-cyan-200">
              This is true mastery.
            </span>
          </p>

        </div>

        {/* SLIDER */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-items-center"
            >
              {visibleCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="
                    group relative
                    w-full max-w-[300px] h-[400px]
                    rounded-tl-[4px]
                    rounded-tr-[4px]
                    rounded-bl-[38px]
                    rounded-br-[38px]
                    overflow-hidden
                    cursor-pointer
                    shadow-2xl
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      transition-all duration-500
                      group-hover:opacity-0
                      group-hover:scale-110
                    "
                  />

                  {/* HOVER BG */}
                  <div
                    className="
                      absolute inset-0
                      bg-[#02131d]
                      opacity-0
                      group-hover:opacity-100
                      transition-all duration-500
                    "
                  />

                  {/* TITLE */}
                  <div
                    className="
                      absolute bottom-6 left-6 z-20
                      group-hover:opacity-0
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-3xl font-extrabold text-white">
                      {card.title}
                    </h3>
                  </div>

                  {/* HOVER CONTENT */}
                  <div
                    className="
                      absolute inset-0 z-30
                      opacity-0
                      group-hover:opacity-100
                      transition-all duration-500
                      flex flex-col justify-center
                      px-6
                    "
                  >
                    <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">
                      {card.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-6 mt-12">

            <button
              onClick={prevPage}
              className="
                w-14 h-14 rounded-full
                bg-white/10
                border border-white/20
                flex items-center justify-center
                text-white
                hover:bg-[#00d4ff]
                transition-all
              "
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`
                    transition-all duration-300
                    ${page === i
                      ? 'w-10 h-3 rounded-full bg-white'
                      : 'w-3 h-3 rounded-full bg-white/40'
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="
                w-14 h-14 rounded-full
                bg-white/10
                border border-white/20
                flex items-center justify-center
                text-white
                hover:bg-[#00d4ff]
                transition-all
              "
            >
              <ChevronRight size={24} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}