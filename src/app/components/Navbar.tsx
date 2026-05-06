"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);

  // 🔥 NEW
  const [showContactModal, setShowContactModal] = useState(false);

  const lastScrollRef = useRef(0);

  const navText =
    "text-[13px] uppercase tracking-[2px] text-white transition duration-300";

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const el = document.querySelector(path);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(path);
  };

  const routeMap: any = {
    "Advanced Open Water": "/advanced-open-water",
    "Specialty Courses": "/specialty-courses",
    "PADI Divemaster": "/padi-divemaster",
    "PADI Rescue Diver": "/padi-rescue-diver",
    "PADI Open Water": "/padi-open-water",
    "PADI Open Diver": "/padi-open-diver",
  };

  const menuItems = [
    { label: "Try Dive", href: "/try-dive" },
    { label: "Get Certified", dropdown: ["PADI Open Water", "PADI Open Diver"] },
    {
      label: "Level Up",
      dropdown: [
        "Advanced Open Water",
        "Specialty Courses",
        "PADI Divemaster",
        "PADI Rescue Diver",
      ],
    },
    { label: "Reactivate", href: "#reactivate" },
    { label: "About", href: "/about" },
  ];

  // 🔥 Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) {
        setShowNavbar(true);
        return;
      }

      setShowNavbar(currentScroll < lastScrollRef.current);
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowContactModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 🔥 PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContactModal]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* 🔥 MAIN NAV */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 bg-[#05263c]/90 backdrop-blur">

          {/* LOGO */}
          <div
            className="flex items-center h-[50px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/logow.svg" className="h-full object-contain" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {"dropdown" in item ? (
                  <>
                    <button className={navText}>
                      {item.label.toUpperCase()}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[170%] left-0 min-w-[220px] rounded-xl p-4 bg-[#082544]/95 backdrop-blur-xl border border-cyan-400/20"
                        >
                          {item.dropdown.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => handleNavigation(routeMap[sub])}
                              className="block w-full text-left px-4 py-2 text-white hover:text-cyan-300"
                            >
                              {sub.toUpperCase()}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={navText}
                  >
                    {item.label.toUpperCase()}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-5 text-white">
            
            {/* 🔥 CALL BUTTON */}
            <button
              onClick={() => setShowContactModal(true)}
              className="hover:text-cyan-300 transition"
            >
              <Phone />
            </button>

            <Mail />

            <button className="px-5 py-2 text-sm rounded-full bg-cyan-300 text-black hover:scale-105 transition">
              BOOK NOW
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 🔥 MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden w-full bg-[#082544]/95 backdrop-blur-xl border-t border-cyan-400/20"
            >
              <div className="flex flex-col p-4 space-y-2">

                {menuItems.map((item) => (
                  <div key={item.label}>

                    {"dropdown" in item ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="w-full text-left px-4 py-3 text-white border-b border-white/10"
                        >
                          {item.label.toUpperCase()}
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 bg-[#05263c]/60 rounded"
                            >
                              {item.dropdown.map((sub) => (
                                <button
                                  key={sub}
                                  onClick={() => {
                                    handleNavigation(routeMap[sub]);
                                    setIsOpen(false);
                                  }}
                                  className="block w-full text-left px-4 py-2 text-white hover:text-cyan-300"
                                >
                                  {sub.toUpperCase()}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavigation(item.href);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-white border-b border-white/10"
                      >
                        {item.label.toUpperCase()}
                      </button>
                    )}

                  </div>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 🔥 PREMIUM CONTACT MODAL */}
{/* 🔥 PREMIUM CONTACT MODAL */}
<AnimatePresence>
  {showContactModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowContactModal(false)}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center px-4"
    >

      {/* 🔥 MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[380px]
          rounded-[32px]
          border border-cyan-400/20
          bg-[#071c2c]/90
          backdrop-blur-2xl
          px-8
          py-12
          text-white
          shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        "
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* 🔥 CLOSE */}
        <button
          onClick={() => setShowContactModal(false)}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition duration-300"
        >
          <X size={22} />
        </button>

        {/* 🔥 CONTENT */}
        <div className="text-center space-y-6">

          {/* ICON */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              <Phone className="text-cyan-300" size={30} />
            </div>
          </div>

          {/* LABEL */}
          <p className="text-[10px] uppercase tracking-[6px] text-cyan-300/80">
            Contact DiveCampus
          </p>

          {/* TITLE */}
          <h2 className="text-[38px] tracking-[3px] leading-[1.5]">
            Call 800 72822
            <br />
            <span className="text-cyan-300">(SCUBA)</span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-white/50 text-[15px] leading-[2.1] tracking-[1.5px]">
            OR
            <br />
            WhatsApp us on
            <br />
            +971507703483
          </p>

        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-12 flex flex-col gap-5">

          {/* CALL BUTTON */}
          <a
            href="tel:80072822"
            className="
              w-full
              py-4
              rounded-2xl
              bg-cyan-300
              text-black
              text-[13px]
              tracking-[3px]
              text-center
              hover:scale-[1.02]
              transition
              duration-300
            "
          >
            CALL NOW
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/971507703483"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              py-4
              rounded-2xl
              border border-green-400/40
              text-green-300
              text-[13px]
              tracking-[3px]
              text-center
              hover:bg-green-400
              hover:text-black
              transition
              duration-300
            "
          >
            WHATSAPP
          </a>

        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}