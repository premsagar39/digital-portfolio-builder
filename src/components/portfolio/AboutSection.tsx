import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutProfile from "@/assets/about-profile.jpg";

const aboutTags = ["SQL", "Power BI", "Excel", "Python", "Tableau", "EDA", "ETL", "KPI Reporting"];

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
              Computer Science student · Gooty, Andhra Pradesh, India
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Computer Science student with strong hands-on experience in SQL,
              Python, Power BI, Tableau and Excel. I specialize in data cleaning,
              exploratory data analysis (EDA), ETL processes, KPI reporting, and
              dashboard development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I have a proven ability to analyze large datasets, uncover trends, and
              deliver actionable insights that support data-driven decision-making
              across multiple business domains.
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
              B.Tech – Computer Science &amp; Engineering (Data Science) · CGPA 75.29% · GATES Institute of Technology
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
