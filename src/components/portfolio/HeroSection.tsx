import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
      className="pt-32 md:pt-40 pb-10 md:pb-16"
      aria-label="Introduction to Premsagar, Data Analyst"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold tracking-tight leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] mb-6 md:mb-8"
        >
          Premsagar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-2xl text-foreground font-medium mb-4 max-w-2xl"
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
          className="text-muted-foreground max-w-xl mb-8 md:mb-10 leading-relaxed text-base md:text-lg"
        >
          Data analysis portfolio: projects, internships and dashboards built with
          SQL, Python, Power BI and Excel — from raw data to decisions.
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
            className="rounded-full px-8 font-medium bg-primary text-primary-foreground hover:bg-primary/85 transition-all duration-300"
          >
            <a href="#contact">Let's Connect</a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 font-medium transition-all duration-300"
          >
            <a href="/resume/Premsagar_Resume_2026.pdf" download>
              <Download />
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="container mx-auto px-4 md:px-6 mt-10 md:mt-16"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={18} className="animate-bounce" aria-hidden="true" />
          Scroll to explore
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
