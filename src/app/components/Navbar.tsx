import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [navbarHover, setNavbarHover] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ NEW: navigation handler
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) {
        setShowNavbar(true);
      } else {
        if (currentScroll > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Try Diving", href: "#try-diving" },
    { label: "Get Certified", dropdown: ["Scuba Diving", "Free Diving"] },
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
    { label: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-[1450px] mx-auto px-8 pt-5">
        <motion.div
          onMouseEnter={() => setNavbarHover(true)}
          onMouseLeave={() => setNavbarHover(false)}
          animate={{
            border: navbarHover
              ? "1px solid rgba(165,243,252,0.4)"
              : "1px solid transparent",
            backdropFilter: navbarHover ? "blur(16px)" : "blur(0px)",
            backgroundColor: navbarHover
              ? "rgba(255,255,255,0.05)"
              : "transparent",
          }}
          className="relative flex items-center justify-between px-8 py-4 rounded-full"
        >
          {/* LOGO */}
          <img
            src="/logow.svg"
            alt="logo"
            className="h-12 scale-150 origin-left"
          />

          {/* Desktop Menu */}
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
                    <button className="flex items-center gap-1 text-sm uppercase tracking-[2px] text-white">
                      {item.label}
                      <ChevronDown size={16} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute top-[170%] left-0 min-w-[250px] rounded-2xl p-4 bg-[#082544]"
                        >
                          {item.dropdown.map((sub) => (
                            <div key={sub}>
                              {sub === "Advanced Open Water" ? (
                                <button
                                  onClick={() =>
                                    handleNavigation("/advanced-open-water")
                                  }
                                  className="block w-full text-left px-4 py-3 text-white hover:text-cyan-300"
                                >
                                  {sub}
                                </button>
                              ) : (
                                <a
                                  href="#"
                                  className="block px-4 py-3 text-white"
                                >
                                  {sub}
                                </a>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a href={item.href} className="text-white">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-5">
            <Phone className="text-white" />
            <Mail className="text-white" />

            <button className="px-7 py-3 rounded-full bg-cyan-300 text-black font-semibold">
              Book Now
            </button>
          </div>

          {/* MOBILE */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}