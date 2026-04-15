import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [navbarHover, setNavbarHover] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const scrollTimeoutRef = useRef<any>(null);
  const lastScrollRef = useRef(0);

  const navText =
    "text-[13px] uppercase tracking-[2px] text-white transition duration-300";

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) {
        setShowNavbar(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        return;
      }

      if (currentScroll > lastScrollRef.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setShowNavbar(false);
      }, 3000);

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 font-habara"
    >
      <motion.div
        onMouseEnter={() => setNavbarHover(true)}
        onMouseLeave={() => setNavbarHover(false)}
        animate={{
          backdropFilter: navbarHover ? "blur(20px)" : "blur(0px)",
          backgroundColor: navbarHover
            ? "rgba(5, 38, 60, 0.9)"
            : "rgba(5, 38, 60, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-between px-10 py-4 w-full transition-all duration-300"
      >
        {/* LOGO */}
        <img
          src="/logow.svg"
          alt="logo"
          className="h-10 scale-150 origin-left"
        />

        {/* MENU */}
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
                  {/* TAB */}
                  <button className={`${navText} relative group`}>
                    <span
                      className={`relative z-10 ${
                        activeDropdown === item.label
                          ? "text-cyan-300"
                          : ""
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </span>

                    {/* UNDERLINE */}
                    <span
                      className={`
                        absolute left-0 bottom-[-6px] h-[2px] w-full
                        bg-cyan-300
                        origin-left
                        scale-x-0 group-hover:scale-x-100
                        transition-transform duration-300 ease-out
                        ${
                          activeDropdown === item.label
                            ? "scale-x-100"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="
                          absolute top-[170%] left-0 min-w-[250px] rounded-xl p-4
                          bg-[#082544]/90 backdrop-blur-xl
                          border border-cyan-400/20
                          shadow-[0_10px_40px_rgba(0,255,255,0.15)]
                        "
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub}
                            className={`
                              block w-full text-left px-4 py-3 rounded-lg
                              ${navText}
                              hover:bg-cyan-400/10
                              hover:text-cyan-300
                              transition-all duration-300
                            `}
                            onClick={() =>
                              sub === "Advanced Open Water" &&
                              handleNavigation("/advanced-open-water")
                            }
                          >
                            {sub.toUpperCase()}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a href={item.href} className={`${navText} relative group`}>
                  <span>{item.label.toUpperCase()}</span>

                  {/* UNDERLINE */}
                  <span
                    className="
                      absolute left-0 bottom-[-6px] h-[2px] w-full
                      bg-cyan-300
                      origin-left scale-x-0
                      group-hover:scale-x-100
                      transition-transform duration-300
                    "
                  />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-5 text-white">
          <Phone />
          <Mail />

          <button
            className="
              px-8 py-3 rounded-full
              bg-[#38BDF8] text-black
              font-semibold text-[13px] uppercase tracking-[2px]
              hover:scale-105 hover:bg-cyan-300
              transition-all duration-300
              shadow-[0_6px_20px_rgba(56,189,248,0.4)]
            "
          >
            BOOK NOW
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
    </motion.nav>
  );
}