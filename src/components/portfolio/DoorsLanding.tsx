import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroProfile from "@/assets/hero-profile.png";

/** The splash screen plays first; the doors entrance starts right after it. */
const SPLASH_MS = 3000;

const doors = [
  { label: "About Me", href: "#about", token: "var(--door-1)", blurb: "The person behind the data" },
  { label: "Skills", href: "#skills", token: "var(--door-2)", blurb: "Toolkit, abilities & certifications" },
  { label: "Projects", href: "#projects", token: "var(--door-3)", blurb: "Dashboards that answer real questions" },
  { label: "Internships", href: "#experience", token: "var(--door-4)", blurb: "Hands-on industry experience" },
  { label: "Contact", href: "#contact", token: "var(--door-5)", blurb: "Open to opportunities" },
];

const useCountUp = (target: number, durationMs: number, start: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - started) / durationMs);
      setValue(Math.round(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
};

const DoorsLanding = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), SPLASH_MS + 100);
    const open = () => setIsOpen(true);
    window.addEventListener("premsagar:open-doors", open);
    return () => {
      clearTimeout(t);
      window.removeEventListener("premsagar:open-doors", open);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    const href = pendingHref.current;
    pendingHref.current = null;
    if (href) {
      const t = setTimeout(
        () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
        350
      );
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const close = useCallback((href?: string) => {
    pendingHref.current = href ?? null;
    setIsOpen(false);
    setHovered(null);
  }, []);

  const count = useCountUp(55, 2600, entered && isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="doors-landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[70] bg-[hsl(var(--doors-bg))] text-[hsl(var(--doors-ink))] overflow-hidden"
          role="dialog"
          aria-label="Choose a section to open"
        >
          {/* Ambient glows */}
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--doors-glow-warm)/0.25)] blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--doors-glow-cool)/0.18)] blur-[120px]"
          />

          {/* Header */}
          <div className="absolute top-6 md:top-8 left-6 md:left-12 text-sm md:text-base">
            <span className="font-semibold">Premsagar</span>
            <span className="text-[hsl(var(--doors-ink-muted))]"> · Portfolio</span>
          </div>
          <div className="absolute top-6 md:top-8 right-6 md:right-12 text-xs md:text-sm text-[hsl(var(--doors-ink-muted))] hidden sm:block">
            Data · SQL · Power BI · Python
          </div>

          {/* Door stack */}
          <div className="relative h-full flex flex-col items-center justify-center px-4">
            <motion.img
              src={heroProfile}
              alt=""
              initial={{ scale: 0.6, opacity: 0 }}
              animate={entered ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-[hsl(var(--doors-ink)/0.15)] shadow-2xl mb-10"
            />

            <div className="relative flex flex-col items-center" onMouseLeave={() => setHovered(null)}>
              {doors.map((door, i) => {
                const isHovered = hovered === i;
                const isDimmed = hovered !== null && !isHovered;
                return (
                  <motion.button
                    key={door.label}
                    type="button"
                    onClick={() => close(door.href)}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    initial={{ y: -160, opacity: 0 }}
                    animate={entered ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 120, damping: 16 }}
                    style={{
                      backgroundColor: `hsl(${door.token})`,
                      zIndex: i,
                      marginTop: i === 0 ? 0 : "-1.75rem",
                    }}
                    whileHover={{ scale: 1.03 }}
                    className={`relative w-[min(84vw,26rem)] md:w-[min(70vw,27rem)] h-16 sm:h-20 md:h-24 rounded-full flex items-center justify-between px-6 sm:px-8 shadow-2xl transition-[width,filter] duration-300 ${
                      isHovered ? "w-[min(90vw,30rem)] brightness-110" : ""
                    } ${isDimmed ? "brightness-[0.75]" : ""} focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--doors-ink)/0.6)]`}
                    aria-label={`Open ${door.label} section`}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg md:text-xl text-left">
                      {door.label}
                    </span>
                    <motion.span
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                      transition={{ duration: 0.25 }}
                      className="hidden md:block text-xs text-[hsl(var(--doors-ink)/0.75)] whitespace-nowrap"
                    >
                      {door.blurb}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => close()}
              className="hidden sm:block absolute bottom-24 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-[hsl(var(--doors-ink-muted))] hover:text-[hsl(var(--doors-ink))] transition-colors"
            >
              Enter portfolio
            </button>
          </div>

          {/* Counter */}
          <div className="absolute left-6 md:left-12 bottom-6 md:bottom-10" aria-hidden="true">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[hsl(var(--doors-ink-muted))] mb-1">
              Opening up the work
            </p>
            <p className="font-display text-6xl md:text-8xl font-bold tabular-nums leading-none">
              {String(count).padStart(3, "0")}
            </p>
          </div>

          {/* Progress bar */}
          <div className="absolute right-6 md:right-12 bottom-8 md:bottom-12 w-32 md:w-48" aria-hidden="true">
            <div className="relative h-px w-full bg-[hsl(var(--doors-ink)/0.2)]">
              <motion.div
                initial={{ width: 0 }}
                animate={entered && isOpen ? { width: "100%" } : {}}
                transition={{ duration: 2.8, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-px bg-[hsl(var(--doors-ink))]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoorsLanding;
