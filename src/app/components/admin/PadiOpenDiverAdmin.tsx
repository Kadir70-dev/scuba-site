"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPadiOpenDiver, updatePadiOpenDiver } from "@/services/PadiOpenService";


export default function PadiOpenDiverAdmin() {

  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [editingField, setEditingField] =
    useState<string | null>(null);

  /* =========================
     FETCH DATA
  ========================= */

  useEffect(() => {

    const fetchData = async () => {

      const { data } =
        await getPadiOpenDiver();

      setData(data);

      setLoading(false);
    };

    fetchData();

  }, []);

  /* =========================
     SAVE
  ========================= */

  const handleSave = async () => {

    if (!data?.id) return;

    setSaving(true);

    await updatePadiOpenDiver(
      data.id,
      data
    );

    setSaving(false);
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#020617]
        text-white
      ">
        Loading...
      </div>
    );
  }

  return (
    <section className="
      relative
      min-h-screen
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-[#02182b]
      shadow-[0_20px_80px_rgba(0,0,0,0.5)]
    ">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src={data?.background_image || "/1.avif"}
          alt="bg"
          className="
            w-full
            h-full
            object-cover
          "
        />

        <div className="
          absolute
          inset-0
          bg-[#02182b]/75
          backdrop-blur-[2px]
        " />

      </div>

      {/* CONTENT */}
      <div className="
        relative
        z-10
        px-6
        py-20
        md:px-14
      ">

        {/* HEADER */}
        <div className="
          flex
          items-center
          justify-between
          flex-wrap
          gap-4
          mb-12
        ">

          <div>

            <p className="
              text-cyan-300
              tracking-[4px]
              text-xs
              uppercase
            ">
              Admin Panel
            </p>

            <h2 className="
              mt-2
              text-3xl
              md:text-5xl
              font-bold
              text-white
            ">
              PADI OPEN DIVER
            </h2>

          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="
              h-[54px]
              px-8
              rounded-2xl
              bg-cyan-400
              text-black
              font-bold
              shadow-[0_0_40px_rgba(34,211,238,0.4)]
            "
          >
            {saving ? "Saving..." : "Save Changes"}
          </motion.button>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        ">

          {/* LEFT SIDE */}
          <div className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-[28px]
            p-6
            space-y-6
          ">

            {/* TOP BADGE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Top Badge
              </label>

              <input
                value={data?.top_badge || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    top_badge: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* SUB TEXT */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Sub Text
              </label>

              <input
                value={data?.sub_text || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    sub_text: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* TITLE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Main Title
              </label>

              <input
                value={data?.title || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    title: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* HIGHLIGHT */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Highlight Text
              </label>

              <input
                value={data?.highlighted_text || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    highlighted_text: e.target.value,
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[54px]
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

            {/* DESCRIPTION */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Description
              </label>

              <textarea
                rows={5}
                value={data?.description || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
                className="
                  mt-2
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

          {/* RIGHT SIDE */}
          <div className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-[28px]
            p-6
            space-y-6
          ">

            {/* OLD PRICE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Old Price
              </label>

              <input
                type="number"
                value={data?.old_price || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    old_price: Number(e.target.value),
                  })
                }
                className="
                  mt-2
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

            {/* NEW PRICE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                New Price
              </label>

              <input
                type="number"
                value={data?.new_price || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    new_price: Number(e.target.value),
                  })
                }
                className="
                  mt-2
                  w-full
                  h-[54px]
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

            {/* PRICE NOTE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Price Note
              </label>

              <input
                value={data?.price_note || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    price_note: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* BUTTON 1 */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Primary Button
              </label>

              <input
                value={data?.primary_button || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    primary_button: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* BUTTON 2 */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Secondary Button
              </label>

              <input
                value={data?.secondary_button || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    secondary_button: e.target.value,
                  })
                }
                className="
                  mt-2
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

            {/* BG IMAGE */}
            <div>

              <label className="
                text-white/60
                text-xs
                uppercase
                tracking-[3px]
              ">
                Background Image
              </label>

              <input
                value={data?.background_image || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    background_image: e.target.value,
                  })
                }
                className="
                  mt-2
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

          </div>

        </div>

        {/* FEATURES */}
        <div className="
          mt-8
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-[28px]
          p-6
        ">

          <h3 className="
            text-white
            text-2xl
            font-bold
            mb-6
          ">
            Features
          </h3>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">

            {[1, 2, 3, 4].map((num) => (

              <input
                key={num}
                value={data?.[`feature_${num}`] || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    [`feature_${num}`]: e.target.value,
                  })
                }
                placeholder={`Feature ${num}`}
                className="
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

            ))}

          </div>

        </div>

        {/* LIVE PREVIEW
        <div className="
          mt-10
          bg-black/30
          border
          border-cyan-400/20
          rounded-[30px]
          overflow-hidden
        ">

          <div className="
            px-6
            py-4
            border-b
            border-white/10
            flex
            items-center
            justify-between
          ">

            <h3 className="
              text-white
              text-xl
              font-bold
            ">
              Live Preview
            </h3>

            <div className="
              px-4
              py-1
              rounded-full
              bg-cyan-400/10
              text-cyan-300
              text-xs
            ">
              REAL TIME
            </div>

          </div>

          <div className="
            relative
            min-h-[700px]
            overflow-hidden
          ">

            <img
              src={data?.background_image || "/1.avif"}
              alt=""
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            <div className="
              absolute
              inset-0
              bg-[#02182b]/70
            " />

            <div className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              min-h-[700px]
              px-6
            ">

              <div className="
                mb-6
                px-5
                py-2
                rounded-full
                border
                border-cyan-300/40
                text-cyan-200
                text-xs
                tracking-widest
              ">
                {data?.top_badge}
              </div>

              <p className="
                text-xs
                tracking-[3px]
                text-white/60
                mb-4
              ">
                {data?.sub_text}
              </p>

              <h1 className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                max-w-4xl
                text-white
              ">
                {data?.title}{" "}

                <span className="text-cyan-400">
                  {data?.highlighted_text}
                </span>
              </h1>

              <p className="
                mt-4
                text-white/70
                max-w-2xl
              ">
                {data?.description}
              </p>

              <div className="
                mt-8
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-xl
                px-8
                py-6
              ">

                <p className="
                  text-sm
                  text-white/50
                  line-through
                ">
                  AED {data?.old_price}
                </p>

                <p className="
                  mt-2
                  text-4xl
                  font-bold
                  text-white
                ">
                  <span className="
                    text-cyan-400
                    text-lg
                    mr-2
                  ">
                    AED
                  </span>

                  {data?.new_price}
                </p>

                <p className="
                  mt-2
                  text-xs
                  text-white/60
                ">
                  {data?.price_note}
                </p>

              </div>

              <div className="
                mt-8
                flex
                gap-4
                flex-wrap
                justify-center
              ">

                <button className="
                  px-8
                  py-3
                  bg-cyan-400
                  text-black
                  rounded-xl
                  font-bold
                ">
                  {data?.primary_button}
                </button>

                <button className="
                  px-8
                  py-3
                  border
                  border-white/20
                  text-white
                  rounded-xl
                ">
                  {data?.secondary_button}
                </button>

              </div>

              <div className="
                mt-12
                flex
                gap-6
                flex-wrap
                justify-center
                text-xs
                text-white/60
              ">

                <span>{data?.feature_1}</span>
                <span>{data?.feature_2}</span>
                <span>{data?.feature_3}</span>
                <span>{data?.feature_4}</span>

              </div>

            </div>

          </div>

        </div> */}

      </div>

    </section>
  );
}