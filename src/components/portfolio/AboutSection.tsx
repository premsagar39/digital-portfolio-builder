import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-card border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="font-display text-5xl md:text-6xl text-gradient font-bold block mb-4">
                    SP
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Data Analyst
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Aspiring <span className="text-primary">Data Analyst</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Detail-oriented Computer Science student with strong hands-on experience in 
              SQL, Python, Power BI, Tableau, and Excel. Specialized in data cleaning, 
              exploratory data analysis (EDA), ETL processes, KPI reporting, dashboard 
              development, and business intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Proven ability to analyze large datasets, uncover trends, and deliver 
              actionable insights and recommendations to support data-driven decision-making 
              and stakeholder reporting across multiple business domains.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <MapPin className="text-primary" size={20} />
                <span className="text-sm text-muted-foreground">Gooty, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <Phone className="text-primary" size={20} />
                <span className="text-sm text-muted-foreground">+91-7671095518</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <Mail className="text-primary" size={20} />
                <span className="text-sm text-muted-foreground truncate">premsagarsingara39@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <GraduationCap className="text-primary" size={20} />
                <span className="text-sm text-muted-foreground">B.Tech CSE (Data Science)</span>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#skills">View My Skills</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
