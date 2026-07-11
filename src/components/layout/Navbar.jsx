import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";

import Button from "../ui/Button";
import { navLinks } from "../../constants/navLinks";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-400";

const navReveal = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const linkList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.18,
    },
  },
};

const reducedList = {
  hidden: {},
  visible: {},
};

const linkReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedOverlay = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const overlay = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.38, ease: [0.76, 0, 0.24, 1] },
  },
};

const mobileLinkList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const markHover = { rotate: 8, scale: 1.04 };
const markTransition = { type: "spring", stiffness: 260, damping: 18 };
const menuTap = { scale: 0.94 };
const closeIconStart = { rotate: -45, opacity: 0 };
const menuIconStart = { rotate: 45, opacity: 0 };
const iconVisible = { rotate: 0, opacity: 1 };
const closeIconExit = { rotate: 45, opacity: 0 };
const menuIconExit = { rotate: -45, opacity: 0 };
const iconTransition = { duration: 0.2 };

function scrollToSection(id, shouldReduceMotion) {
  const target = document.getElementById(id);

  if (!target) {
    window.history.replaceState(null, "", `#${id}`);
    return;
  }

  target.scrollIntoView({
    behavior: shouldReduceMotion ? "auto" : "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", `#${id}`);
}

function HexaMark({ shouldReduceMotion }) {
  return (
    <motion.span
      className="relative grid size-9 shrink-0 place-items-center rounded-full border border-cyber-400/25 bg-white/[0.06] shadow-glow"
      whileHover={shouldReduceMotion ? undefined : markHover}
      transition={markTransition}
      aria-hidden="true"
    >
      <span className="absolute size-4 rotate-45 rounded-sm border border-cyber-400/70" />
      <span className="size-2 rounded-full accent-gradient" />
    </motion.span>
  );
}

function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0]?.id || "home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = null;

    function handleScroll() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 40;
        setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
        frameId = null;
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    if (!isMenuOpen) {
      return undefined;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      mobilePanelRef.current?.querySelector("[data-mobile-nav-link]")?.focus();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isMenuOpen]);

  function handleNavClick(id) {
    scrollToSection(id, shouldReduceMotion);
    setActiveSection(id);
    setIsMenuOpen(false);
  }

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-5 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={shouldReduceMotion ? reducedReveal : navReveal}
      >
        <nav
          className={clsx(
            "mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5",
            isScrolled
              ? "border border-white/12 bg-void-950/70 shadow-soft backdrop-blur-2xl"
              : "border border-transparent bg-transparent shadow-none",
          )}
          aria-label="Primary navigation"
        >
          <button
            className={clsx("group inline-flex items-center gap-3 rounded-full pr-2 text-left", focusRing)}
            type="button"
            onClick={() => handleNavClick("home")}
            aria-label="Go to HexaCore home"
          >
            <HexaMark shouldReduceMotion={shouldReduceMotion} />
            <span className="text-base font-semibold tracking-normal text-ink-50">
              Hexa<span className="bg-gradient-to-r from-cyber-400 to-violet-400 bg-clip-text text-transparent">Core</span>
            </span>
          </button>

          <motion.ul
            className="hidden items-center gap-1 lg:flex"
            variants={shouldReduceMotion ? reducedList : linkList}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <motion.li key={link.id} variants={linkReveal}>
                  <button
                    className={clsx(
                      "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      focusRing,
                      isActive ? "text-ink-50" : "text-ink-300 hover:text-ink-50",
                    )}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {link.title}
                    <span
                      className={clsx(
                        "absolute bottom-1.5 left-4 right-4 h-px origin-left rounded-full accent-gradient transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          <div className="hidden lg:block">
            <Button
              as="a"
              href="#contact"
              variant="accent"
              size="md"
              iconRight={ArrowUpRight}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("contact");
              }}
              className="shadow-violet"
            >
              Book a Call
            </Button>
          </div>

          <motion.button
            ref={menuButtonRef}
            className={clsx(
              "grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-ink-50 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.1] lg:hidden",
              focusRing,
            )}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            whileTap={shouldReduceMotion ? undefined : menuTap}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={closeIconStart}
                  animate={iconVisible}
                  exit={closeIconExit}
                  transition={shouldReduceMotion ? { duration: 0 } : iconTransition}
                >
                  <X className="size-5" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={menuIconStart}
                  animate={iconVisible}
                  exit={menuIconExit}
                  transition={shouldReduceMotion ? { duration: 0 } : iconTransition}
                >
                  <Menu className="size-5" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            ref={mobilePanelRef}
            className="fixed inset-0 z-40 flex flex-col bg-void-950/96 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shouldReduceMotion ? reducedOverlay : overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.ul
              className="flex flex-1 flex-col justify-center gap-3"
              variants={shouldReduceMotion ? reducedList : mobileLinkList}
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.li key={link.id} variants={linkReveal}>
                    <button
                      className={clsx(
                        "flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-3xl font-semibold transition-colors duration-300",
                        focusRing,
                        isActive
                          ? "border-cyber-400/30 bg-white/[0.08] text-ink-50"
                          : "border-white/10 text-ink-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-ink-50",
                      )}
                      type="button"
                      data-mobile-nav-link
                      onClick={() => handleNavClick(link.id)}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {link.title}
                      <span className="text-base font-medium text-cyber-400">0{index + 1}</span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div className="[&>div]:w-full" variants={linkReveal}>
              <Button
                as="a"
                href="#contact"
                variant="accent"
                size="lg"
                iconRight={ArrowUpRight}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick("contact");
                }}
                className="w-full"
              >
                Book a Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
