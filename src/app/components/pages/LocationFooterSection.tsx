"use client";

import { MapPin, Coffee, Car, Waves } from "lucide-react";

export function LocationFooterSection() {
  return (
    <>
      {/* LOCATION SECTION */}
      <section
        className="relative bg-gradient-to-r from-[#02131d] to-[#031e2d] text-white py-32 overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-[1120px] mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <p className="text-[10px] tracking-[4px] text-cyan-400 mb-6 uppercase">

              The Headquarters

            </p>

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.12] tracking-[1.2px]">

              Your Classroom

              <br />

              <span className="text-cyan-400">
                by the Sea.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] md:text-[16px] text-white/60 mt-9 max-w-[540px] leading-[2] tracking-[0.45px]">

              DiveCampus, Unit 3, 23 Street 14B,
              Al Quoz, Dubai, United Arab Emirates.

              <br />
              <br />

              Experience premium facilities,
              luxury-level diver comfort,
              and professional PADI training
              designed for modern underwater explorers.

            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-12 text-[13px] text-white/75 tracking-[0.4px]">

              <div className="flex items-center gap-3">

                <Car className="w-4 h-4 text-cyan-400 shrink-0" />

                <span className="leading-[1.8]">
                  Free Parking
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Waves className="w-4 h-4 text-cyan-400 shrink-0" />

                <span className="leading-[1.8]">
                  Beach & Pool Access
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />

                <span className="leading-[1.8]">
                  Hot Showers
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Coffee className="w-4 h-4 text-cyan-400 shrink-0" />

                <span className="leading-[1.8]">
                  Complimentary Coffee
                </span>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex gap-4 flex-wrap">

              <a
                href="https://www.google.com/maps/search/?api=1&query=DiveCampus+Al+Quoz+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white text-[#0a0e27] text-[12px] tracking-[1px] rounded-2xl font-medium hover:scale-[1.03] transition duration-300 shadow-lg"
              >

                GET DIRECTIONS

              </a>

              <button className="px-7 py-3.5 border border-white/20 text-[12px] tracking-[1px] rounded-2xl hover:bg-white/10 transition duration-300">

                CHAT WITH TEAM

              </button>

            </div>

          </div>

          {/* RIGHT MAP */}
          <div className="rounded-[28px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/10">

            <iframe
              src="https://maps.google.com/maps?q=DiveCampus%20Al%20Quoz%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        className="bg-[#020d16] text-white py-24 border-t border-white/5"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        <div className="max-w-[1120px] mx-auto grid md:grid-cols-4 gap-14 px-6">

          {/* DOWNLOAD */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[4px] mb-7 uppercase">

              Download App

            </p>

            <div className="space-y-4">

              <div className="border border-white/20 rounded-2xl px-5 py-3.5 text-[12px] tracking-[0.45px] leading-[1.8] text-white/80 hover:bg-white/5 transition duration-300 cursor-pointer">

                App Store

              </div>

              <div className="border border-white/20 rounded-2xl px-5 py-3.5 text-[12px] tracking-[0.45px] leading-[1.8] text-white/80 hover:bg-white/5 transition duration-300 cursor-pointer">

                Google Play

              </div>

            </div>

          </div>

          {/* CONNECT */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[4px] mb-7 uppercase">

              Connect

            </p>

            <p className="text-white/75 text-[13px] tracking-[0.4px] leading-[2]">

              WhatsApp Support

            </p>

            <div className="mt-6">

              <input
                placeholder="Enter email..."
                className="w-full px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white text-[12px] tracking-[0.4px] placeholder:text-white/35 outline-none"
              />

              <button className="mt-4 w-full bg-cyan-500 py-3.5 rounded-2xl text-[11px] tracking-[1px] hover:scale-[1.02] transition duration-300">

                SUBSCRIBE

              </button>

            </div>

          </div>

          {/* INFO */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[4px] mb-7 uppercase">

              Information

            </p>

            <ul className="space-y-5 text-white/70 text-[13px] tracking-[0.4px] leading-[1.9]">

              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Blogs
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>

            </ul>

          </div>

          {/* COURSES */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[4px] mb-7 uppercase">

              Diving Courses

            </p>

            <ul className="space-y-5 text-white/70 text-[13px] tracking-[0.4px] leading-[1.9]">

              <li className="hover:text-white transition cursor-pointer">
                Open Water
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Advanced Open Water
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Rescue Diver
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Dive Master
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-white/35 text-[11px] tracking-[1.2px] mt-20 leading-[2.2]">

          © 2026 DiveCampus. All rights reserved.

        </div>

      </footer>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </>
  );
}