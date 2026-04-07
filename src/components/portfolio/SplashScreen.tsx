import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroProfile from "@/assets/hero-profile.png";
import splashAnimationData from "@/assets/splash-animation.json";

const Lottie = lazy(() => import("lottie-react"));

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
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 30%, #162454 60%, #1e3a8a 100%)",
          }}
        >
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + i * 2,
                height: 4 + i * 2,
                background: i % 2 === 0 ? "rgba(56, 189, 248, 0.4)" : "rgba(167, 139, 250, 0.3)",
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Primary ambient glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          {/* Secondary glow */}
          <div
            className="absolute w-72 h-72 rounded-full blur-[80px] opacity-10"
            style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", top: "20%", right: "15%" }}
            aria-hidden="true"
          />

          {/* Lottie + Profile container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center mb-8"
          >
            {/* Lottie rings */}
            <div className="absolute w-60 h-60 md:w-80 md:h-80">
              <Suspense fallback={null}>
                <Lottie
                  animationData={splashAnimationData}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              </Suspense>
            </div>

            {/* Outer glow ring */}
            <motion.div
              className="absolute w-44 h-44 md:w-52 md:h-52 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #38bdf8, #7c3aed, #06b6d4, #a78bfa, #38bdf8)",
                filter: "blur(10px)",
                opacity: 0.7,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner subtle ring */}
            <motion.div
              className="absolute w-38 h-38 md:w-46 md:h-46 rounded-full border border-white/10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile image */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20"
              style={{
                boxShadow: "0 0 50px rgba(56, 189, 248, 0.35), 0 0 100px rgba(124, 58, 237, 0.2), inset 0 0 30px rgba(56, 189, 248, 0.1)",
              }}
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase mb-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(90deg, #ffffff, #e0f2fe, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
            }}
          >
            Premsagar Portfolio
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-32 h-[1px] mb-3"
            style={{
              background: "linear-gradient(90deg, transparent, #38bdf8, #a78bfa, transparent)",
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase mb-4"
            style={{ color: "rgba(148, 163, 184, 0.8)" }}
          >
            Data Analyst | SQL | Power BI | Excel
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-sm md:text-base italic"
            style={{ color: "rgba(203, 213, 225, 0.7)" }}
          >
            Turning Data into{" "}
            <span
              className="font-semibold not-italic"
              style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Decisions
            </span>
          </motion.p>

          {/* Bottom loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-12 flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#38bdf8" }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
