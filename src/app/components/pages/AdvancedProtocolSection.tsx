"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {

  Anchor,

  Compass,

  MapPin,

  Ship,

  Waves,

  Moon,

  Search,

  MessageCircle,

} from "lucide-react";

import {

  getAdvancedProtocolSection,

  getAdvancedProtocolCards,

} from "@/services/AdvancedProtocolService";

/* =========================================
   ICONS
========================================= */

const icons: any = {

  Anchor: <Anchor size={20} />,

  Compass: <Compass size={20} />,

  MapPin: <MapPin size={20} />,

  Ship: <Ship size={20} />,

  Waves: <Waves size={20} />,

  Moon: <Moon size={20} />,

  Search: <Search size={20} />,

};

/* =========================================
   COMPONENT
========================================= */

export function AdvancedProtocolSection() {

  const [section, setSection] = useState<any>(null);

  const [cards, setCards] = useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  /* =========================================
     FETCH DATA
  ========================================= */

  useEffect(() => {

    const fetchData = async () => {

      const { data: sectionData } =
        await getAdvancedProtocolSection();

      const { data: cardsData } =
        await getAdvancedProtocolCards();

      setSection(sectionData);

      setCards(cardsData || []);

      setLoading(false);

    };

    fetchData();

  }, []);

  /* =========================================
     LOADING
  ========================================= */

  if (loading) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#f3f6f9]
        text-black
      ">

        Loading...

      </div>

    );

  }

  return (

    <section
      className="
        py-32
        bg-[#f3f6f9]
      "
      style={{
        fontFamily:
          "Harabara, sans-serif",
      }}
    >

      {/* HEADER */}
      <div className="
        text-center
        max-w-4xl
        mx-auto
        px-6
        mb-20
      ">

        {/* TOP LABEL */}
        <p className="
          text-[10px]
          tracking-[4px]
          text-cyan-500
          mb-5
        ">

          {section?.top_label}

        </p>

        {/* HEADING */}
        <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          text-[#0a0e27]
          leading-[1.22]
          tracking-[1px]
        ">

          {section?.title}{" "}

          <span className="
            text-cyan-500
          ">

            {section?.highlighted_title}

          </span>

        </h2>

        {/* SUBTEXT */}
        <p className="
          mt-7
          text-[15px]
          md:text-[16px]
          leading-[1.95]
          tracking-[0.5px]
          text-gray-500
          max-w-2xl
          mx-auto
        ">

          {section?.description}

        </p>

        {/* INFO BOX */}
        <div className="
          mt-9
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          text-sm
          text-gray-600
          text-left
          shadow-sm
          backdrop-blur-md
        ">

          <p className="
            mb-4
            leading-[1.9]
            tracking-[0.4px]
          ">

            •{" "}

            {section?.info_box_1}

          </p>

          <p className="
            leading-[1.9]
            tracking-[0.4px]
          ">

            •{" "}

            {section?.info_box_2}

          </p>

        </div>

      </div>

      {/* GRID */}
      <div className="
        max-w-6xl
        mx-auto
        px-6
        grid
        md:grid-cols-4
        gap-7
      ">

        {cards.map((card, i) => (

          <motion.div
            key={card.id}
            whileHover={{ y: -6 }}
            transition={{
              duration: 0.25,
            }}
            className={`
              p-7
              rounded-2xl
              border
              transition-all
              duration-300
              shadow-sm
              bg-white

              ${
                card.highlight
                  ? "border-yellow-400 bg-[#fffdf7]"
                  : "border-gray-200"
              }
            `}
          >

            {/* TAG */}
            <div className="
              text-[9px]
              tracking-[2.5px]
              text-cyan-500
              mb-5
            ">

              {card.tag}

            </div>

            {/* ICON */}
            <div className="
              text-cyan-500
              mb-5
            ">

              {
                icons[
                  card.icon
                ]
              }

            </div>

            {/* TITLE */}
            <h3 className="
              text-[15px]
              font-semibold
              tracking-[0.8px]
              leading-[1.5]
              text-[#0a0e27]
              mb-4
            ">

              {card.title}

            </h3>

            {/* DESCRIPTION */}
            <p className="
              text-[13px]
              text-gray-500
              leading-[1.95]
              tracking-[0.35px]
            ">

              {card.description}

            </p>

          </motion.div>

        ))}

        {/* CTA CARD */}
        <div className="
          p-7
          rounded-2xl
          border
          border-gray-200
          bg-white
          flex
          flex-col
          justify-center
          items-center
          text-center
        ">

          {/* ICON */}
          <MessageCircle
            className="
              text-cyan-500
              mb-5
            "
            size={22}
          />

          {/* TITLE */}
          <h3 className="
            text-[15px]
            font-semibold
            tracking-[0.8px]
            leading-[1.5]
            text-[#0a0e27]
            mb-4
          ">

            {section?.cta_title}

          </h3>

          {/* DESC */}
          <p className="
            text-[13px]
            text-gray-500
            leading-[1.9]
            tracking-[0.35px]
            mb-6
          ">

            {section?.cta_description}

          </p>

          {/* BUTTON */}
          <button className="
            px-5
            py-2.5
            text-[11px]
            tracking-[1.5px]
            border
            border-gray-300
            rounded-lg
            hover:bg-gray-100
            transition
            duration-300
          ">

            {section?.cta_button}

          </button>

        </div>

      </div>

    </section>

  );

}