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

  updateAdvancedProtocolSection,

  getAdvancedProtocolCards,


  updateAdvancedProtocolCard,


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

export default function AdvancedProtocolAdmin() {

  const [section, setSection] = useState<any>(null);

  const [cards, setCards] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  /* =========================================
     FETCH
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
     SAVE SECTION
  ========================================= */

  const handleSaveSection = async () => {

    if (!section?.id) return;

    setSaving(true);

    await updateAdvancedProtocolSection(
      section.id,
      section
    );

    setSaving(false);
  };

  /* =========================================
     UPDATE CARD
  ========================================= */

  const handleUpdateCard = async (
    id: string,
    payload: any
  ) => {

    await updateAdvancedProtocolCard(
      id,
      payload
    );

  };

  /* =========================================
     ADD CARD
  ========================================= */

  const handleAddCard = async () => {

    const payload = {

      section_id: section?.id,

      tag: "NEW TAG",

      title: "New Card",

      description: "New description",

      icon: "Anchor",

      highlight: false,

      sort_order: cards.length + 1,

    };

//     const { data } =
//       await createAdvancedProtocolCard(
//         payload
//       );

//     if (data) {

//       setCards([...cards, data]);

//     }

//   };

  /* =========================================
     DELETE CARD
  ========================================= */

//   const handleDeleteCard = async (
//     id: string
//   ) => {

//     await deleteAdvancedProtocolCard(id);

//     setCards(
//       cards.filter(
//         (card) => card.id !== id
//       )
//     );

  };

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
        py-24
        bg-[#f3f6f9]
      "
      style={{
        fontFamily: "Harabara, sans-serif",
      }}
    >

      {/* HEADER */}
      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">

        <div className="
          flex
          items-center
          justify-between
          mb-12
          flex-wrap
          gap-5
        ">

          <div>

            <p className="
              text-[10px]
              tracking-[4px]
              text-cyan-500
              mb-3
            ">
              ADMIN PANEL
            </p>

            <h2 className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#0a0e27]
            ">
              Advanced Protocol
            </h2>

          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveSection}
            className="
              px-7
              h-[54px]
              rounded-2xl
              bg-cyan-500
              text-white
              font-semibold
              shadow-lg
            "
          >

            {saving
              ? "Saving..."
              : "Save Section"}

          </motion.button>

        </div>

        {/* SECTION FORM */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-7
          mb-12
        ">

          {/* LEFT */}
          <div className="
            bg-white
            rounded-3xl
            border
            border-gray-200
            p-7
            shadow-sm
            space-y-5

          ">

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Top Label
              </label>

              <input
                value={section?.top_label || ""}
                onChange={(e) =>
                  setSection({
                    ...section,
                    top_label:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  outline-none
                  text-black
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Main Title
              </label>

              <input
                value={section?.title || ""}
                onChange={(e) =>
                  setSection({
                    ...section,
                    title:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  outline-none
                  resize-none
                  text-black


                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Highlighted Title
              </label>

              <input
                value={
                  section?.highlighted_title || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    highlighted_title:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  outline-none
                  text-black
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Description
              </label>

              <textarea
                rows={5}
                value={
                  section?.description || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    description:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  outline-none
                  resize-none
                "
              />

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            bg-white
            rounded-3xl
            border
            border-gray-200
            p-7
            shadow-sm
            space-y-5
          ">

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Info Box 1
              </label>

              <textarea
                rows={3}
                value={
                  section?.info_box_1 || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    info_box_1:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  outline-none
                  resize-none
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                Info Box 2
              </label>

              <textarea
                rows={3}
                value={
                  section?.info_box_2 || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    info_box_2:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  outline-none
                  resize-none
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                CTA Title
              </label>

              <input
                value={
                  section?.cta_title || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    cta_title:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  outline-none
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                CTA Description
              </label>

              <textarea
                rows={3}
                value={
                  section?.cta_description || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    cta_description:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  outline-none
                  resize-none
                "
              />

            </div>

            <div>

              <label className="
                text-xs
                tracking-[2px]
                text-gray-400
                uppercase
              ">
                CTA Button
              </label>

              <input
                value={
                  section?.cta_button || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    cta_button:
                      e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  outline-none
                "
              />

            </div>

          </div>

        </div>

        {/* CARD HEADER */}
        <div className="
          flex
          items-center
          justify-between
          mb-7
          flex-wrap
          gap-4
        ">

          <h3 className="
            text-2xl
            font-bold
            text-[#0a0e27]
          ">
            Protocol Cards
          </h3>

          {/* <button
            onClick={handleAddCard}
            className="
              flex
              items-center
              gap-2
              px-5
              h-[50px]
              rounded-2xl
              bg-[#0a0e27]
              text-white
            "
          >

            <Plus size={18} />

            Add Card

          </button> */}

        </div>

        {/* CARDS GRID */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-7
        ">

          {cards.map((card, i) => (

            <motion.div
              key={card.id}
              whileHover={{ y: -5 }}
              className={`
                bg-white
                rounded-3xl
                border
                p-6
                shadow-sm
                space-y-5
                ${
                  card.highlight
                    ? "border-yellow-400 bg-[#fffdf7]"
                    : "border-gray-200"
                }
              `}
            >

              {/* TOP */}
              <div className="
                flex
                items-center
                justify-between
              ">

                <div className="
                  text-cyan-500
                ">
                  {
                    icons[
                      card.icon
                    ]
                  }
                </div>

                    {/* <button
                    onClick={() =>
                        handleDeleteCard(
                        card.id
                        )
                    }
                    className="
                        w-10
                        h-10
                        rounded-xl
                        bg-red-50
                        flex
                        items-center
                        justify-center
                        text-red-500
                    "
                    >

                    <Trash2 size={16} />

                    </button> */}

              </div>

              {/* TAG */}
              <input
                value={card.tag}
                onChange={(e) => {

                  const updated =
                    [...cards];

                  updated[i].tag =
                    e.target.value;

                  setCards(updated);

                  handleUpdateCard(
                    card.id,
                    updated[i]
                  );

                }}
                className="
                  w-full
                  h-[48px]
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  text-[11px]
                  tracking-[2px]
                  uppercase
                  outline-none
                "
              />

              {/* TITLE */}
              <input
                value={card.title}
                onChange={(e) => {

                  const updated =
                    [...cards];

                  updated[i].title =
                    e.target.value;

                  setCards(updated);

                  handleUpdateCard(
                    card.id,
                    updated[i]
                  );

                }}
                className="
                  w-full
                  h-[52px]
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  font-semibold
                  outline-none
                  text-black
                "
              />

              {/* DESCRIPTION */}
              <textarea
                rows={5}
                value={card.description}
                onChange={(e) => {

                  const updated =
                    [...cards];

                  updated[i].description =
                    e.target.value;

                  setCards(updated);

                  handleUpdateCard(
                    card.id,
                    updated[i]
                  );

                }}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-4
                  text-sm
                  outline-none
                  resize-none
                  text-black
                "
              />

              {/* ICON */}
              <select
                value={card.icon}
                onChange={(e) => {

                  const updated =
                    [...cards];

                  updated[i].icon =
                    e.target.value;

                  setCards(updated);

                  handleUpdateCard(
                    card.id,
                    updated[i]
                  );

                }}
                className="
                  w-full
                  h-[50px]
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  outline-none
                  text-black
                "
              >

                {Object.keys(icons).map(
                  (icon) => (

                    <option
                      key={icon}
                      value={icon}
                    >

                      {icon}

                    </option>

                  )
                )}

              </select>

              {/* HIGHLIGHT */}
              <div className="
                flex
                items-center
                justify-between
                pt-2
              ">

                <span className="
                  text-sm
                  text-gray-500
                ">
                  Highlight Card
                </span>

                <input
                  type="checkbox"
                  checked={card.highlight}
                  onChange={(e) => {

                    const updated =
                      [...cards];

                    updated[i].highlight =
                      e.target.checked;

                    setCards(updated);

                    handleUpdateCard(
                      card.id,
                      updated[i]
                    );

                  }}
                  className="
                    w-5
                    h-5
                  "
                />

              </div>

            </motion.div>

          ))}

          {/* CTA PREVIEW CARD */}
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

            <MessageCircle
              className="
                text-cyan-500
                mb-5
              "
              size={22}
            />

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

            <p className="
              text-[13px]
              text-gray-500
              leading-[1.9]
              tracking-[0.35px]
              mb-6
            ">

              {section?.cta_description}

            </p>

            <button className="
              px-5
              py-2.5
              text-[11px]
              tracking-[1.5px]
              border
              border-gray-300
              rounded-lg
            ">

              {section?.cta_button}

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}