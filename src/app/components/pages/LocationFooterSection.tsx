"use client";

import { MapPin, Coffee, Car, Waves } from "lucide-react";

export function LocationFooterSection() {
  return (
    <>
      {/* 🔥 LOCATION SECTION */}
      <section className="bg-gradient-to-r from-[#02131d] to-[#031e2d] text-white py-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[10px] tracking-widest text-cyan-400 mb-3">
              THE HEADQUARTERS
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
              Your Classroom <br />
              <span className="text-cyan-400">by the Sea.</span>
            </h2>

            {/* ✅ UPDATED ADDRESS */}
            <p className="text-[12px] text-white/60 mt-4 max-w-[420px]">
              DiveCampus, Unit 3, 23 Street 14B, Al Quoz - Dubai, United Arab Emirates.
              Enjoy premium facilities and professional dive training.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-6 text-[11px] text-white/70">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-cyan-400" /> Free Parking
              </div>
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-400" /> Beach & Pool Access
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" /> Hot Showers
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-cyan-400" /> Complimentary Coffee
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://www.google.com/maps/search/?api=1&query=DiveCampus+Al+Quoz+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-[#0a0e27] text-[12px] rounded-lg font-medium hover:scale-105 transition"
              >
                GET DIRECTIONS
              </a>

              <button className="px-5 py-2.5 border border-white/20 text-[12px] rounded-lg hover:bg-white/10 transition">
                CHAT WITH TEAM
              </button>
            </div>

          </div>

          {/* RIGHT MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=DiveCampus%20Al%20Quoz%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[320px] border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 🔥 FOOTER */}
      <footer className="bg-[#020d16] text-white py-16">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-4 gap-10 px-6 text-[12px]">

          {/* DOWNLOAD */}
          <div>
            <p className="text-white/60 mb-3">DOWNLOAD APP</p>
            <div className="space-y-2">
              <div className="border border-white/20 rounded-lg px-4 py-2">
                App Store
              </div>
              <div className="border border-white/20 rounded-lg px-4 py-2">
                Google Play
              </div>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="text-white/60 mb-3">CONNECT</p>
            <p className="text-white/80">WhatsApp Support</p>

            <div className="mt-4">
              <input
                placeholder="Enter email..."
                className="w-full px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[11px]"
              />
              <button className="mt-2 w-full bg-cyan-500 py-2 rounded-full text-[11px] hover:scale-105 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* INFO */}
          <div>
            <p className="text-white/60 mb-3">INFORMATION</p>
            <ul className="space-y-2 text-white/70">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <p className="text-white/60 mb-3">DIVING COURSES</p>
            <ul className="space-y-2 text-white/70">
              <li>Open Water</li>
              <li>Advanced Open Water</li>
              <li>Rescue Diver</li>
              <li>Dive Master</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-white/40 text-[11px] mt-10">
          © 2026 DiveCampus. All rights reserved.
        </div>
      </footer>
    </>
  );
}