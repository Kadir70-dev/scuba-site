"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function LocationSection() {
  const locations = [
    {
      title: "DUBAI BASE",
      rating: "4.8",
      reviews: "(1,082 Google Reviews)",
      address: "Azure Residences, The Palm Jumeirah, Dubai, UAE",
      email: "info@nemodivingcenter.com",
      phone: "+971 56 704 4472",
      map: "https://maps.google.com/maps?q=palm+jumeirah&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "FUJAIRAH BASE",
      rating: "4.9",
      reviews: "(486 Google Reviews)",
      address: "Royal Beach, Dibba Fujairah, UAE",
      email: "dive@nemodivingcenter.com",
      phone: "+971 58 504 4450",
      map: "https://maps.google.com/maps?q=fujairah+beach&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-[#f8fafc] to-[#eef2f6]">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {locations.map((loc, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
          >

            {/* HEADER */}
            <div className="text-center mb-6">
              <h3 className="text-sm tracking-widest text-gray-400">
                {loc.title}
              </h3>

              <p className="text-sm mt-1 text-gray-600">
                {loc.rating} ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-400 text-xs">
                  {loc.reviews}
                </span>
              </p>
            </div>

            {/* INFO */}
            <div className="space-y-4 text-sm text-gray-600 mb-6">

              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-500 w-5 h-5 mt-1" />
                <span>{loc.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-500 w-5 h-5" />
                <span>{loc.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-500 w-5 h-5" />
                <span>{loc.phone}</span>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border">
              <iframe
                src={loc.map}
                className="w-full h-[220px]"
                loading="lazy"
              />
            </div>

            {/* BUTTON */}
            <a
              href={loc.map}
              target="_blank"
              className="inline-block mt-4 text-xs text-cyan-600 hover:underline"
            >
              Open in Maps ↗
            </a>

          </motion.div>
        ))}

      </div>
    </section>
  );
}