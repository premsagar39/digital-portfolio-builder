import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroProfile from "@/assets/hero-profile.png";

const words = ["Power BI Developer", "Data Analyst", "Business Analyst", "Finance Analyst", "MIS Executive"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-8 md:pb-12"
      aria-label="Introduction to Premsagar, Data Analyst"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Data &amp; business analytics · Portfolio
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] mb-5 md:mb-7"
            >
              <span className="text-name">Premsagar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-2xl text-foreground font-medium mb-3 max-w-2xl"
              aria-live="polite"
            >
              And I'm a{" "}
              <span className="text-muted-foreground">
                {displayText}
                <span className="animate-pulse" aria-hidden="true">|</span>
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-muted-foreground max-w-2xl mb-7 md:mb-9 leading-relaxed text-base md:text-lg"
            >
              I turn complex data into practical business insights through analysis,
              forecasting, customer segmentation and clear, decision-ready dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 font-medium bg-primary text-primary-foreground hover:bg-primary/85 hover:scale-[1.03] transition-all duration-300"
              >
                <a href="#projects">
                  Explore projects
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-medium hover:scale-[1.03] transition-all duration-300"
              >
                <a href="/resume/Premsagar_Resume_2026.pdf" download>
                  <Download />
                  Download resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Circular portrait with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-border/80"
              />
              <img
                src={heroProfile}
                alt="Premsagar, aspiring Data Analyst skilled in SQL, Power BI and Excel"
                width={320}
                height={320}
                className="relative w-32 h-32 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover ring-1 ring-border glow-effect"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="container mx-auto px-4 md:px-6 mt-8 md:mt-12"
      >
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Explore Premsagar's projects"
          >
            <ArrowDown size={18} className="animate-bounce" aria-hidden="true" />
            Selected work
          </a>
          <span className="text-xs md:text-sm text-muted-foreground">Based in Andhra Pradesh, India</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
