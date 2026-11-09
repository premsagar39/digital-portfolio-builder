import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutProfile from "@/assets/hero-profile.png";

const aboutTags = ["SQL", "Python", "Power BI", "Advanced Excel", "Tableau", "RFM Segmentation", "Cohort Analysis", "Forecasting"];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-8 md:py-12" aria-label="About Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-card border border-border p-8 md:p-12 lg:p-16 shadow-sm grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Content */}
          <div>
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">
              Data Analyst
            </h2>
            <p className="text-muted-foreground mb-6">
              Computer Science (Data Science) graduate · Andhra Pradesh, India
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Data Analyst and Computer Science (Data Science) graduate with
              hands-on experience in SQL, Python, Power BI, Tableau and Advanced Excel.
              My work spans data cleaning and ETL, interactive dashboards, customer
              segmentation, cohort analysis and demand forecasting.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Across retail, lending, workforce and sales data, I turn large datasets
              into reliable KPIs and clear recommendations that support better
              business decisions.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
              B.Tech – Computer Science &amp; Engineering (Data Science) · 75.29% · GATES Institute of Technology
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs md:max-w-sm rounded-full overflow-hidden ring-1 ring-border glow-effect">
              <img
                src={aboutProfile}
                alt="Premsagar - Aspiring Data Analyst with expertise in SQL, Power BI, and Excel"
                className="w-full aspect-square object-cover"
                width={448}
                height={448}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
