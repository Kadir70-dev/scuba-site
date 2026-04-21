"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { role: "Founder", name: "ISLAM" },
  { role: "Co-Founder", name: "SNEHA" },
  { role: "Lead Instructor", name: "Justin" },
  { role: "Dive Master", name: "Ali Hassan" },
  { role: "Instructor", name: "Sara Khan" },
  { role: "Operations", name: "Ahmed Raza" },
  { role: "Admin", name: "Zaw" },
];

export function AboutDiveCampus() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // const goBack = () => {
  //   window.location.href = "/";
  // };

  useEffect(() => {
    const ctx = gsap.context(() => {

      const total = cardsRef.current.length;

      const getRadius = () => {
        if (window.innerWidth < 640) return 120;
        if (window.innerWidth < 1024) return 180;
        return 260;
      };

      let radius = getRadius();

      const updateOrbit = () => {
        radius = getRadius();
      };

      window.addEventListener("resize", updateOrbit);

      cardsRef.current.forEach((card, i) => {
        const angle = (i / total) * Math.PI * 2;

        gsap.set(card, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          opacity: 0.3,
          scale: 0.7,
        });
      });

      let rotation = { value: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(rotation, {
        value: Math.PI * 2,
        ease: "none",
        onUpdate: () => {
          cardsRef.current.forEach((card, i) => {
            const angle = (i / total) * Math.PI * 2 + rotation.value;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const depth = Math.cos(angle);

            gsap.set(card, {
              x,
              y,
              scale: 0.7 + depth * 0.3,
              opacity: 0.3 + depth * 0.7,
              filter: `blur(${(1 - depth) * 8}px)`,
            });
          });
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative h-screen w-full overflow-hidden
        bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]
        text-white font-habara
      "
    >
      {/* ✅ LOGO AS BACK BUTTON */}
      {/* <div className="absolute top-16 left-6 z-30 cursor-pointer">
        <img
          src="/logow.svg"   // 🔥 yaha apna logo path daal
          alt="logo"
          onClick={goBack}
          className="w-12 sm:w-14 hover:scale-105 transition"
        />
      </div> */}

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />

      {/* TEXT */}
      <div className="
        absolute z-20
        top-20 left-1/2 -translate-x-1/2 text-center
        lg:left-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:text-left
        max-w-[280px]
      ">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Meet <span className="text-cyan-300">Our Team</span>
        </h2>
        <p className="text-white/60 mt-3 text-sm">
          Scroll to explore the story
        </p>
      </div>

      {/* ORBIT */}
      <div className="absolute inset-0 flex items-center justify-center">
        {team.map((member, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="
              absolute
              w-[140px] h-[180px]
              sm:w-[180px] sm:h-[240px]
              lg:w-[240px] lg:h-[320px]
              rounded-xl lg:rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-xl
              flex flex-col items-center justify-center
              text-center
            "
          >
            <h3 className="text-sm sm:text-lg font-bold">
              {member.name}
            </h3>
            <p className="text-cyan-300 text-xs sm:text-sm mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}