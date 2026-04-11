import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Twitter },
    { icon: Youtube },
  ];

  return (
    <footer className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      {/* GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20">

        {/* ===== MAIN LAYOUT ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ===== LEFT SIDE ===== */}
          <div className="space-y-6">

            <motion.img
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              src="/logow.svg"
              className="w-32"
            />

            <p className="text-white/70 max-w-md">
              Your gateway to extraordinary underwater adventures.
              Premium training and unforgettable experiences.
            </p>

            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex gap-3 items-center">
                <Mail className="text-cyan-300" size={16} />
                info@divecampus.com
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-cyan-300" size={16} />
                +971 50 770 3483
              </div>

              <div className="flex gap-3 items-center">
                <MapPin className="text-cyan-300" size={16} />
                Dubai, UAE
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-3 rounded-xl bg-white/10 border border-white/20 hover:border-cyan-300"
                >
                  <social.icon className="text-white w-5 h-5" />
                </motion.div>
              ))}
            </div>

          </div>

          {/* ===== RIGHT SIDE (VERTICAL MAP CARDS) ===== */}
          <div className="grid grid-cols-2 gap-6">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
            >
              {/* HEADER */}
              <div className="p-3">
                <h4 className="text-white text-xs font-semibold flex items-center gap-2">
                  <MapPin className="text-cyan-300" size={14} />
                  Dubai - Al Quoz
                </h4>

                <p className="text-white/50 text-[11px] mt-1">
                  Al Quoz 1, Dubai
                </p>
              </div>

              {/* MAP (TALL) */}
              <iframe
                src="https://www.google.com/maps?q=Al+Quoz+1+Dubai&output=embed"
                className="w-full h-[320px] grayscale group-hover:grayscale-0 transition duration-500"
              />
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
            >
              {/* HEADER */}
              <div className="p-3">
                <h4 className="text-white text-xs font-semibold flex items-center gap-2">
                  <MapPin className="text-cyan-300" size={14} />
                  Khorfakkan Beach
                </h4>

                <p className="text-white/50 text-[11px] mt-1">
                  Khorfakkan, UAE
                </p>
              </div>

              {/* MAP (TALL) */}
              <iframe
                src="https://www.google.com/maps?q=Khorfakkan+Beach&output=embed"
                className="w-full h-[320px] grayscale group-hover:grayscale-0 transition duration-500"
              />
            </motion.div>

          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">

          <p className="text-white/50 text-sm">
            © {currentYear} Dive Campus. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <span className="text-white/50 hover:text-cyan-300 cursor-pointer">Privacy</span>
            <span className="text-white/50 hover:text-cyan-300 cursor-pointer">Terms</span>
            <span className="text-white/50 hover:text-cyan-300 cursor-pointer">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
}