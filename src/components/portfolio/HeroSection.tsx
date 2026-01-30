import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4"
            >
              Hello, It's Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="text-foreground">Singara</span>{" "}
              <span className="text-gradient">Premsagar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="text-xl md:text-2xl text-muted-foreground">
                And I'm a
              </span>
              <span className="text-xl md:text-2xl text-primary font-semibold">
                Data Analyst
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Detail-oriented Computer Science student skilled in SQL, Python, Power BI, 
              Tableau and Excel. Specialized in data cleaning, exploratory data analysis, 
              dashboard development, and business intelligence.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="https://linkedin.com/in/premsagar123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(187 85% 53% / 0.5)" }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/premsagar39"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(187 85% 53% / 0.5)" }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:premsagarsingara39@gmail.com"
                className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(187 85% 53% / 0.5)" }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect font-semibold px-8"
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center animate-float p-1">
                <img 
                  src={profilePhoto} 
                  alt="Singara Premsagar" 
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-md" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
