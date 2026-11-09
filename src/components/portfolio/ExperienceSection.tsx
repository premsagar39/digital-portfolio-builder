import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "SmartBridge Educational Services",
    period: "Oct 2025 – Mar 2026",
    badge: "APSCHE Certified",
    highlights: [
      "Partnered with HR and leadership teams to define reporting requirements for workforce and attrition analysis",
      "Validated and audited employee datasets to improve data quality and reporting reliability",
      "Developed Tableau dashboards monitoring workforce KPIs and attrition trends to support retention decisions",
      "Automated recurring Excel reporting workflows, reducing manual reporting effort by approximately 40%",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "GrowAI",
    period: "May 2025 – Oct 2025",
    badge: "Master Data Analysis Program",
    highlights: [
      "Applied data quality checks and validation rules to ETL workflows on 11,000+ transactional records",
      "Built interactive Power BI sales dashboards with DAX measures to track sales performance and revenue trends",
      "Delivered SQL customer segmentation analyses that informed quarterly business decisions",
      "Built an Excel sales dashboard with PivotTables, Pivot Charts and slicers to summarize KPIs and trends",
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
