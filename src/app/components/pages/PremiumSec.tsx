"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export function PremiumSec() {
  return (
    <>
      <footer
        className="relative text-white pt-28 pb-12 overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src="/img3.jpeg"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#02131d]/90" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* GRID */}
          <div className="grid md:grid-cols-5 gap-14">

            {/* ================= DOWNLOAD ================= */}
            <div>

              <h4 className="text-[10px] tracking-[3.5px] text-gray-400 mb-6">

                DOWNLOAD APP

              </h4>

              <div className="space-y-4">

                <button className="w-full border border-white/20 rounded-2xl px-5 py-4 text-left text-[13px] tracking-[0.45px] hover:bg-white/10 transition backdrop-blur-md">

                  🍎 App Store

                </button>

                <button className="w-full border border-white/20 rounded-2xl px-5 py-4 text-left text-[13px] tracking-[0.45px] hover:bg-white/10 transition backdrop-blur-md">

                  ▶ Google Play

                </button>

              </div>

            </div>

            {/* ================= CONNECT ================= */}
            <div>

              <h4 className="text-[10px] tracking-[3.5px] text-gray-400 mb-6">

                CONNECT

              </h4>

              <p className="text-[14px] tracking-[0.5px] text-cyan-400 mb-5 leading-[1.8]">

                WhatsApp Support

              </p>

              <div className="flex flex-col gap-4">

                <input
                  placeholder="Enter email for deals..."
                  className="bg-white/10 border border-white/20 px-5 py-3 rounded-full text-[13px] tracking-[0.4px] outline-none backdrop-blur-md placeholder:text-white/45"
                />

                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-full text-[12px] tracking-[1px] font-semibold hover:scale-[1.02] transition shadow-lg">

                  SUBSCRIBE

                </button>

              </div>

            </div>

            {/* ================= INFO ================= */}
            <div>

              <h4 className="text-[10px] tracking-[3.5px] text-gray-400 mb-6">

                INFORMATION

              </h4>

              <ul className="space-y-4 text-[13px] text-gray-300 tracking-[0.45px]">

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  About Us
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Blogs
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Terms & Conditions
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Privacy Policy
                </li>

              </ul>

            </div>

            {/* ================= EXPERIENCES ================= */}
            <div>

              <h4 className="text-[10px] tracking-[3.5px] text-gray-400 mb-6">

                EXPERIENCES

              </h4>

              <ul className="space-y-4 text-[13px] text-gray-300 tracking-[0.45px]">

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Try Scuba Dive
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Certified Trips
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  International Trips
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Refresher Course
                </li>

              </ul>

            </div>

            {/* ================= COURSES ================= */}
            <div>

              <h4 className="text-[10px] tracking-[3.5px] text-gray-400 mb-6">

                DIVING COURSES

              </h4>

              <ul className="space-y-4 text-[13px] text-gray-300 tracking-[0.45px]">

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  PADI Open Water
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Advanced Open Water
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Rescue Diver
                </li>

                <li className="hover:text-white transition cursor-pointer leading-[1.8]">
                  Dive Master
                </li>

              </ul>

            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-14" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* SOCIALS */}
            <div className="flex gap-4">

              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition cursor-pointer"
                >

                  <Icon size={16} />

                </div>
              ))}

            </div>

            {/* COPYRIGHT */}
            <p className="text-[11px] text-gray-400 text-center tracking-[1px] leading-[1.9]">

              © 2026 DIVING IN UAE · POWERED BY NEMO DIVING CENTER

            </p>

          </div>

        </div>
      </footer>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </>
  );
}