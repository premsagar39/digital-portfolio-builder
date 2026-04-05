import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroProfile from "@/assets/hero-profile.png";

const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  (navigator as any).standalone === true;

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 100%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          {/* Profile Image — only on website, not in PWA */}
          {!isStandalone && (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white/20 overflow-hidden shadow-2xl">
                <img
                  src={heroProfile}
                  alt="Premsagar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          )}

          {/* Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: isStandalone ? 0.2 : 0.5 }}
            className="text-center px-4"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              Premsagar Portfolio
            </h1>
            <p className="text-sm md:text-base text-white/60 tracking-widest uppercase">
              Data Analyst | SQL | Power BI | Excel
            </p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isStandalone ? 0.4 : 0.8 }}
            className="flex gap-1.5 mt-10"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
