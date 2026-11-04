import { motion } from "framer-motion";

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
  return (
    <section id="experience" className="py-12 md:py-16" aria-label="Internship Experience">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-10 md:mb-14"
        >
          Internships
        </motion.h2>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[2rem] bg-card border border-border p-8 md:p-12 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
                <div>
                  <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Internship · {exp.period}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
                    {exp.company}
                  </h3>
                </div>
                <span className="self-start px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground">
                  {exp.badge}
                </span>
              </div>

              <p className="text-muted-foreground font-medium mb-5">{exp.title}</p>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
