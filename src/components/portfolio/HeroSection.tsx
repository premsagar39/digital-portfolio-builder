import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProfile from "@/assets/hero-profile.png";
import heroProfileBack from "@/assets/hero-profile-back.png";
import { useState, useEffect } from "react";

const words = ["Power BI Developer", "Data Analyst", "Business Analyst", "Finance Analyst", "MIS Executive"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      aria-label="Hero section introducing Premsagar, Data Analyst"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-12">
          {/* Profile Image with 3D Flip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2 lg:flex-1"
          >
            <div className="relative animate-float" style={{ perspective: "1000px" }}>
              <div
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
                aria-label="Click to flip profile image"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s ease-in-out",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-[4px] rounded-full bg-card overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img 
                    src={heroProfile} 
                    alt="Premsagar - Data Analyst skilled in SQL, Power BI, Excel and Data Visualization" 
                    className="w-full h-full object-cover object-top"
                    width={384}
                    height={384}
                    loading="eager"
                  />
                </div>
                {/* Back Side */}
                <div
                  className="absolute inset-[4px] rounded-full bg-card overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img 
                    src={heroProfileBack} 
                    alt="Premsagar - Professional portrait" 
                    className="w-full h-full object-cover object-top"
                    width={384}
                    height={384}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary/20 rounded-full blur-xl" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-foreground text-2xl md:text-3xl font-bold mb-2"
            >
              Hello, It's Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-name"
            >
              Premsagar — Data Analyst
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="text-xl md:text-2xl text-foreground font-bold">
                And I'm a
              </span>
              <span className="text-xl md:text-2xl text-primary font-bold min-w-[200px] text-left" aria-live="polite">
                {displayText}
                <span className="animate-pulse" aria-hidden="true">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Detail-oriented Computer Science student skilled in SQL, Python, Power BI, 
              Tableau, and Excel. Specialized in data cleaning, EDA, ETL processes, KPI 
              reporting, and dashboard development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground glow-effect font-semibold px-8 rounded-full transition-all duration-300"
              >
                <a href="#contact">Let's Connect</a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-8 rounded-full transition-all duration-300"
              >
                <a href="/resume/Premsagar_Resume_2026.pdf" download>
                  <Download />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to About section">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
