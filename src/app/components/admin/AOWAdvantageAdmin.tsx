"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {

  Check,

  Plus,

  Trash2,

  Save,

} from "lucide-react";

import {

  getAOWAdvantageSection,

  updateAOWAdvantageSection,

  getAOWAdvantagePoints,

//   createAOWAdvantagePoint,

  updateAOWAdvantagePoint,

//   deleteAOWAdvantagePoint,

} from "@/services/AOWAdvantageService";

/* =========================================
   COMPONENT
========================================= */

export default function AOWAdvantageAdmin() {

  const [section, setSection] =
    useState<any>(null);

  const [points, setPoints] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  /* =========================================
     FETCH
  ========================================= */

  useEffect(() => {

    const fetchData = async () => {

      const { data: sectionData } =
        await getAOWAdvantageSection();

      const { data: pointsData } =
        await getAOWAdvantagePoints();

      setSection(sectionData);

      setPoints(pointsData || []);

      setLoading(false);

    };

    fetchData();

  }, []);

  /* =========================================
     SAVE SECTION
  ========================================= */

  const handleSave = async () => {

    if (!section?.id) return;

    setSaving(true);

    await updateAOWAdvantageSection(
      section.id,
      section
    );

    setSaving(false);

  };

  /* =========================================
     UPDATE POINT
  ========================================= */

  const handleUpdatePoint = async (
    id: string,
    payload: any
  ) => {

    await updateAOWAdvantagePoint(
      id,
      payload
    );

  };

  /* =========================================
     ADD POINT
  ========================================= */

  const handleAddPoint = async () => {

    const payload = {

      section_id: section?.id,

      title: "New Point",

      description:
        "New description",

      sort_order:
        points.length + 1,

    };

//     const { data } =
//       await createAOWAdvantagePoint(
//         payload
//       );

//     if (data) {

//       setPoints([
//         ...points,
//         data,
//       ]);

//     }

//   };

  /* =========================================
     DELETE POINT
  ========================================= */

//   const handleDelete = async (
//     id: string
//   ) => {

//     await deleteAOWAdvantagePoint(id);

//     setPoints(
//       points.filter(
//         (item) => item.id !== id
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
        bg-[#03121c]
        text-white
      ">

        Loading...

      </div>

    );

  }

  return (

    <section
      className="
        py-32
        bg-[#03121c]
        text-white
      "
      style={{
        fontFamily:
          "Harabara, sans-serif",
      }}
    >

      <div className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-20
        px-6
        items-start
      ">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            justify-center
            sticky
            top-10
          "
        >

          <div className="
            rounded-3xl
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            max-w-[440px]
            w-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-4
          ">

            <img
              src={
                section?.image_url ||
                "/A59I9512.jpg"
              }
              alt="divers"
              className="
                w-full
                h-full
                object-cover
                rounded-2xl
              "
            />

            <input
              value={
                section?.image_url || ""
              }
              onChange={(e) =>
                setSection({
                  ...section,
                  image_url:
                    e.target.value,
                })
              }
              placeholder="Image URL"
              className="
                mt-4
                w-full
                h-[54px]
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-5
                text-white
                outline-none
              "
            />

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TOP */}
          <div className="
            flex
            items-center
            justify-between
            gap-4
            mb-10
            flex-wrap
          ">

            <div>

              <p className="
                text-[10px]
                tracking-[4px]
                text-cyan-400
                mb-3
              ">
                ADMIN PANEL
              </p>

              <h2 className="
                text-3xl
                md:text-5xl
                font-bold
              ">
                AOW Advantage
              </h2>

            </div>

            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              onClick={handleSave}
              className="
                h-[56px]
                px-7
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                flex
                items-center
                gap-3
              "
            >

              <Save size={18} />

              {saving
                ? "Saving..."
                : "Save"}

            </motion.button>

          </div>

          {/* FORM */}
          <div className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-7
            backdrop-blur-xl
            space-y-6
          ">

            {/* LABEL */}
            <div>

              <label className="
                text-[11px]
                tracking-[3px]
                uppercase
                text-white/50
              ">
                Top Label
              </label>

              <input
                value={
                  section?.top_label || ""
                }
                onChange={(e) =>
                  setSection({
                    ...section,
                    top_label:
                      e.target.value,
                  })
                }
                className="
                  mt-3
                  w-full
                  h-[58px]
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  px-5
                  text-white
                  outline-none
                "
              />

            </div>

            {/* TITLE */}
            <div className="
              grid
              md:grid-cols-2
              gap-5
            ">

              <div>

                <label className="
                  text-[11px]
                  tracking-[3px]
                  uppercase
                  text-white/50
                ">
                  Title
                </label>

                <input
                  value={
                    section?.title || ""
                  }
                  onChange={(e) =>
                    setSection({
                      ...section,
                      title:
                        e.target.value,
                    })
                  }
                  className="
                    mt-3
                    w-full
                    h-[58px]
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    px-5
                    text-white
                    outline-none
                  "
                />

              </div>

              <div>

                <label className="
                  text-[11px]
                  tracking-[3px]
                  uppercase
                  text-white/50
                ">
                  Highlight Title
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
                    mt-3
                    w-full
                    h-[58px]
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    px-5
                    text-cyan-300
                    outline-none
                  "
                />

              </div>

            </div>

            {/* DESCRIPTION */}
            <div>

              <label className="
                text-[11px]
                tracking-[3px]
                uppercase
                text-white/50
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
                  mt-3
                  w-full
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-5
                  text-white
                  outline-none
                  resize-none
                "
              />

            </div>

          </div>

          {/* POINTS HEADER */}
          <div className="
            mt-14
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
            mb-8
          ">

            <h3 className="
              text-2xl
              font-bold
            ">
              Advantage Points
            </h3>

          </div>

          {/* POINTS */}
          <div className="
            space-y-7
          ">

            {points.map(
              (item, i) => (

                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  className="
                    flex
                    gap-5
                    border-b
                    border-white/10
                    pb-7
                  "
                >

                  {/* ICON */}
                  <div className="
                    mt-1
                  ">

                    <div className="
                      w-7
                      h-7
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-400/10
                      text-cyan-400
                    ">

                      <Check
                        size={14}
                      />

                    </div>

                  </div>

                  {/* TEXT */}
                  <div className="
                    flex-1
                    space-y-4
                  ">

                    {/* TITLE */}
                    <input
                      value={item.title}
                      onChange={(e) => {

                        const updated =
                          [...points];

                        updated[i].title =
                          e.target.value;

                        setPoints(updated);

                        handleUpdatePoint(
                          item.id,
                          updated[i]
                        );

                      }}
                      className="
                        w-full
                        h-[54px]
                        rounded-2xl
                        bg-white/5
                        border
                        border-white/10
                        px-5
                        text-white
                        outline-none
                        font-semibold
                      "
                    />

                    {/* DESCRIPTION */}
                    <textarea
                      rows={4}
                      value={
                        item.description
                      }
                      onChange={(e) => {

                        const updated =
                          [...points];

                        updated[i].description =
                          e.target.value;

                        setPoints(updated);

                        handleUpdatePoint(
                          item.id,
                          updated[i]
                        );

                      }}
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        border
                        border-white/10
                        p-5
                        text-white
                        outline-none
                        resize-none
                      "
                    />

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}