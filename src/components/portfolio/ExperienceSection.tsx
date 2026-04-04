import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "SmartBridge Educational Services",
    period: "Oct 2025 – Mar 2026",
    badge: "APSCHE Certified",
    highlights: [
      "Partnered with HR and cross-functional teams to define business requirements and validated data quality across employee datasets",
      "Built Tableau HR Analytics dashboards tracking attrition rates and workforce KPIs to drive strategic retention decisions",
      "Diagnosed root causes of workforce attrition through structured EDA; automated Excel reporting — reducing manual effort by ~40%",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "GrowAI",
    period: "May 2025 – Oct 2025",
    badge: "Master Data Analysis Program",
    highlights: [
      "Applied data governance principles to ETL workflows on 11,000+ records — enforcing data quality checks and validation rules",
      "Delivered Power BI dashboards with DAX measures tracking sales performance and revenue trends",
      "Translated ambiguous business problems into SQL-driven customer segmentation analysis informing quarterly ROI decisions",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/50 relative" aria-label="Internship Experience">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Internships</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" aria-hidden="true" />

                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase size={18} aria-hidden="true" />
                      <span className="font-display font-semibold">{exp.title}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar size={14} aria-hidden="true" />
                      <time>{exp.period}</time>
                    </div>
                    {exp.badge && (
                      <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium mb-4">
                        {exp.badge}
                      </span>
                    )}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
