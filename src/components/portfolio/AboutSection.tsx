import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import aboutProfile from "@/assets/about-profile.jpg";

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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/50">
                <img 
                  src={aboutProfile} 
                  alt="Singara Premsagar" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
              Aspiring Data Analyst
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              I am a Computer Science student with strong hands-on experience in 
              SQL, Python, Power BI, Tableau and Excel. I specialize in data cleaning, 
              exploratory data analysis (EDA), ETL processes, KPI reporting, and 
              dashboard development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I have proven ability to analyze large datasets, uncover trends, and 
              deliver actionable insights to support data-driven decision-making 
              across multiple business domains.
            </p>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-full px-8 transition-all duration-300"
            >
              <a href="#skills">Know My Skills</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
