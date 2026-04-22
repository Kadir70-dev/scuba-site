"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export function PremiumFooter() {
  return (
    <footer className="relative bg-[#06141f] text-white pt-20 pb-10 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/img3.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-5 gap-10">

          {/* DOWNLOAD */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-4">
              DOWNLOAD APP
            </h4>

            <div className="space-y-3">
              <button className="w-full border border-white/20 rounded-lg px-4 py-3 text-left hover:bg-white/10 transition">
                🍎 App Store
              </button>

              <button className="w-full border border-white/20 rounded-lg px-4 py-3 text-left hover:bg-white/10 transition">
                ▶ Google Play
              </button>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-4">
              CONNECT
            </h4>

            <p className="text-sm mb-3 text-cyan-400">
              WhatsApp Support
            </p>

            <div className="flex flex-col gap-3">
              <input
                placeholder="Enter email for deals..."
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm outline-none"
              />

              <button className="bg-cyan-500 text-black py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* INFO */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-4">
              INFORMATION
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-4">
              EXPERIENCES
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Try Scuba Dive</li>
              <li>Certified Trips</li>
              <li>International Trips</li>
              <li>Refresher Course</li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-4">
              DIVING COURSES
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>PADI Open Water</li>
              <li>Advanced Open Water</li>
              <li>Rescue Diver</li>
              <li>Dive Master</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* SOCIAL */}
          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
              <Facebook size={16} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
              <Instagram size={16} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 cursor-pointer">
              <Twitter size={16} />
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-400 text-center">
            © 2026 DIVING IN UAE | POWERED BY NEMO DIVING CENTER
          </p>

        </div>

      </div>
    </footer>
  );
}