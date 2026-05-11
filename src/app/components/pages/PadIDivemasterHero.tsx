"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import { OpenDiverBooking } from "./OpenDiverBooking";

import { Navbar } from "../Navbar";

import {

  getDivemasterHero,

} from "@/services/DivemasterHeroService";

/* =========================================
   FRONTEND
========================================= */

export function PadiDivemasterHero() {

  const [open, setOpen] =
    useState(false);

  const [data, setData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  /* =========================================
     FETCH DATA
  ========================================= */

  useEffect(() => {

    const fetchData =
      async () => {

        const response =
          await getDivemasterHero();

        console.log(
          "DIVEMASTER HERO =>",
          response
        );

        setData(response.data);

        setLoading(false);

      };

    fetchData();

  }, []);

  if (loading || !data)
    return null;

  return (

    <>
      <Navbar />

      <section className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        font-habara
        text-white
      ">

        {/* BG */}
        <div className="
          absolute
          inset-0
        ">

          <img
            src={
              data.background_image
            }
            alt="diving"
            className="
              w-full
              h-full
              object-cover
              scale-[1.02]
            "
          />

          <div className="
            absolute
            inset-0
            bg-[#02182b]/60
          " />

        </div>

        {/* CONTENT */}
        <div className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
          min-h-screen
          px-6
        ">

          {/* BADGE */}
          <div className="
            relative
            overflow-hidden
            mb-9
            px-6
            py-2.5
            text-[11px]
            tracking-[3.2px]
            border
            border-cyan-300/40
            rounded-full
            text-cyan-200
            backdrop-blur-md
          ">

            <span className="
              relative
              z-10
            ">

              {data.top_badge}

            </span>

            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "200%",
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-0
                left-0
                w-[40%]
                h-full
                bg-gradient-to-r
                from-transparent
                via-cyan-300/70
                to-transparent
                blur-md
                opacity-80
              "
            />

          </div>

          {/* SUB TEXT */}
          <p className="
            text-[11px]
            uppercase
            tracking-[4.5px]
            text-white/55
            mb-6
          ">

            {data.sub_text}

          </p>

          {/* TITLE */}
          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-[1.16]
            tracking-[1.2px]
            max-w-5xl
          ">

            {data.title}{" "}

            <span className="
              text-cyan-400
            ">

              {
                data.highlighted_title
              }

            </span>

          </h1>

          {/* DESC */}
          <p className="
            mt-8
            text-white/72
            max-w-2xl
            text-[15px]
            md:text-[16px]
            leading-[2]
            tracking-[0.55px]
          ">

            {data.description}

          </p>

          {/* PRICE */}
          <div className="
            mt-16
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            px-12
            py-9
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">

            <p className="
              text-xs
              text-white/40
              line-through
              mb-3
              tracking-[2.2px]
            ">

              AED {data.old_price}

            </p>

            <h2 className="
              text-5xl
              font-bold
              tracking-[1.2px]
              leading-none
            ">

              <span className="
                text-cyan-400
                text-lg
                tracking-[2.5px]
                font-medium
                mr-2
              ">

                AED

              </span>

              {data.new_price}

            </h2>

            <p className="
              text-xs
              text-white/55
              mt-5
              tracking-[1.1px]
              leading-[1.9]
            ">

              {data.price_note}

            </p>

          </div>

          {/* BUTTONS */}
          <div className="
            mt-12
            flex
            gap-5
            flex-wrap
            justify-center
          ">

            {/* ENROLL */}
            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                px-10
                py-3.5
                bg-cyan-400
                text-black
                font-semibold
                rounded-2xl
                tracking-[1.1px]
                hover:scale-105
                transition
                duration-300
                shadow-lg
              "
            >

              {
                data.enroll_button_text
              }

            </button>

            {/* WHATSAPP */}
            <a
              href={
                data.whatsapp_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-10
                py-3.5
                border
                border-white/25
                rounded-2xl
                text-white
                flex
                items-center
                gap-3
                tracking-[1px]
                hover:bg-white/10
                transition
                duration-300
                backdrop-blur-md
              "
            >

              <FaWhatsapp
                className="
                  text-green-400
                  text-lg
                "
              />

              {
                data.whatsapp_button_text
              }

            </a>

          </div>

          {/* FEATURES */}
          <div className="
            mt-16
            flex
            gap-10
            text-white/55
            text-[11px]
            tracking-[1.4px]
            flex-wrap
            justify-center
          ">

            <span>
              {data.feature_1}
            </span>

            <span>
              {data.feature_2}
            </span>

            <span>
              {data.feature_3}
            </span>

            <span>
              {data.feature_4}
            </span>

          </div>

        </div>

      </section>

      {/* FLOATING CTA */}
      <div className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-50
      ">

        <div className="
          flex
          items-center
          bg-[#1f2a33]/90
          backdrop-blur-xl
          p-1.5
          rounded-full
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        ">

          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              flex
              items-center
              gap-2
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-cyan-500
              text-black
              font-semibold
              text-sm
              tracking-[1px]
            "
          >

            {
              data.floating_button_text
            }

          </button>

          <a
            href={
              data.floating_whatsapp_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-2
              w-11
              h-11
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              text-white
            "
          >

            <FaWhatsapp
              className="
                text-lg
              "
            />

          </a>

        </div>

      </div>

      {/* MODAL */}
      <OpenDiverBooking
        isOpen={open}
        onClose={() =>
          setOpen(false)
        }
      />

    </>

  );

}