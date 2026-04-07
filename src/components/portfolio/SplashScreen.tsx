import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroProfile from "@/assets/hero-profile.png";
import splashAnimationData from "@/assets/splash-animation.json";

const Lottie = lazy(() => import("lottie-react"));

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 100%)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-96 h-96 rounded-full blur-[100px] opacity-20"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, #7c3aed 50%, transparent 70%)" }}
            aria-hidden="true"
          />

          {/* Lottie + Profile container */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center mb-6"
          >
            {/* Lottie rings */}
            <div className="absolute w-56 h-56 md:w-72 md:h-72">
              <Suspense fallback={null}>
                <Lottie
                  animationData={splashAnimationData}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              </Suspense>
            </div>

            {/* Glowing ring behind image */}
            <motion.div
              className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #38bdf8, #7c3aed, #38bdf8)",
                filter: "blur(8px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile image */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl"
              style={{ boxShadow: "0 0 40px rgba(56, 189, 248, 0.3), 0 0 80px rgba(124, 58, 237, 0.15)" }}
            >
              <img
                src={heroProfile}
                alt="Premsagar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Premsagar Portfolio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-xs md:text-sm text-white/50 tracking-[0.3em] uppercase mb-3"
          >
            Data Analyst | SQL | Power BI | Excel
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm md:text-base text-white/70 italic"
          >
            Turning Data into{" "}
            <span
              className="font-semibold not-italic"
              style={{
                background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Decisions
            </span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
