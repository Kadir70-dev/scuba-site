import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const cards = [
  {
    title: 'ADVANCE FINNING',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200',
    description: `"Move effortlessly. Breathe less. Disturb nothing."

• Improve movement efficiency  
• Reduce air consumption  
• Navigate tight spaces`,
  },
  {
    title: 'ADVANCE BUOYANCY',
    image: 'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=1200',
    description: `"Stop fighting the water."

• Hover motionless  
• Perfect trim  
• Protect reefs`,
  },
  {
    title: 'SWITCH TO DIR',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    description: `"Dive smarter."

• Streamlined gear  
• Better teamwork`,
  },
  {
    title: 'OVERCOME WATER PHOBIA',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1200',
    description: `"Build confidence."

• Private sessions  
• Step-by-step learning`,
  },
  {
    title: 'PRECISION',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    description: 'Perfect control and movement.',
  },
  {
    title: 'FLOW',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    description: 'Move naturally underwater.',
  },
  {
    title: 'MASTERY',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200',
    description: 'Elite diving skills.',
  },
  {
    title: 'ELITE',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200',
    description: 'Become top-level diver.',
  },
];

const cardsPerPage = 4;

export function WhyChooseUs() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const visibleCards = cards.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45] overflow-hidden">

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
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {visibleCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                className="
                  group relative
                  w-[280px] h-[400px]
                  overflow-hidden
                  cursor-pointer
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]

                  rounded-t-[6px]
                  rounded-bl-[6px]
                  rounded-br-[40px]

                  border border-white/10
                  transition-all duration-500
                  hover:border-cyan-300
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
        </AnimatePresence>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-6 mt-12">

          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/30"
          >
            <ChevronLeft className="mx-auto" />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <div
                key={i}
                onClick={() => setPage(i)}
                className={`cursor-pointer ${
                  page === i
                    ? 'w-8 h-2 bg-cyan-300 rounded-full'
                    : 'w-2 h-2 bg-white/40 rounded-full'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/30"
          >
            <ChevronRight className="mx-auto" />
          </button>

        </div>

      </div>
    </section>
  );
}