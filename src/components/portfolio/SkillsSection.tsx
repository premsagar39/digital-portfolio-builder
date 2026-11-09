import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Braces,
  Database,
  LayoutDashboard,
  LineChart,
  Presentation,
  Search,
} from "lucide-react";

const skills = [
  "Python",
  "SQL (MySQL)",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "XGBoost",
  "Power BI",
  "Plotly",
  "Tableau",
  "Excel",
  "EDA",
  "Statistical Analysis",
  "Data Cleaning",
  "ETL Processes",
  "KPI Reporting",
  "Dashboard Development",
  "Business Intelligence",
  "DAX",
  "Power Query",
  "Window Functions",
  "RFM Segmentation",
  "Cohort Analysis",
  "Demand Forecasting",
  "Jupyter Notebook",
  "MySQL Workbench",
  "GitHub",
];

const abilities = [
  {
    title: "Data Quality & ETL",
    description: "Building validation checks and reliable ETL workflows for large, analysis-ready datasets.",
    icon: Database,
  },
  {
    title: "Customer & Cohort Analysis",
    description: "Using RFM segmentation and cohort retention analysis to reveal customer behavior and value.",
    icon: Search,
  },
  {
    title: "Dashboard Development",
    description: "Interactive Power BI & Tableau dashboards with slicers and drill-through reports.",
    icon: LayoutDashboard,
  },
  {
    title: "Demand Forecasting",
    description: "Comparing forecasting methods with chronological validation to support inventory planning.",
    icon: LineChart,
  },
  {
    title: "SQL & Data Modeling",
    description: "Applying MySQL joins, subqueries and window functions to answer business questions at scale.",
    icon: Braces,
  },
  {
    title: "Insight Storytelling",
    description: "Translating analysis into recommendations stakeholders can act on.",
    icon: Presentation,
  },
];

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    institution: "GATES Institute of Technology, Andhra Pradesh (JNTUA affiliated)",
    year: "2022 – 2026",
    score: "75.29%",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Sai Jr. College",
    year: "2022",
    score: "71%",
  },
  {
    degree: "SSC",
    institution: "Mourya High School, Tadipatri",
    year: "2020",
    score: "95%",
  },
];

const certifications = [
  {
    title: "Masters Program in Data Science",
    description: "FutureSkills Prime · nasscom IT-ITeS SSC · Gold Category · August 2026",
  },
  {
    title: "Data Science Programme",
    description: "ExcelR · Certificate of Excellence, Distinction · August 2026",
  },
  {
    title: "Master Data Analysis Program",
    description: "GrowAI · 2025",
  },
];

const SectionHeading = ({ children }: { children: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-10 md:mb-14"
  >
    {children}
  </motion.h2>
);

const cardClass =
  "rounded-[2rem] bg-card border border-border p-8 md:p-12 shadow-sm";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 md:py-16" aria-label="Skills, education and certifications">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Skills</SectionHeading>

        {/* Ability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-6">
          {abilities.map((ability, i) => {
            const Icon = ability.icon;
            return (
              <motion.div
                key={ability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1.5">{ability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ability.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-6">
          {/* Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cardClass}
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Toolkit
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground hover:-translate-y-0.5 hover:border-foreground/40 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cardClass}
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Education
            </p>
            <div className="grid gap-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-6 border-b border-border last:pb-0 last:border-b-0"
                >
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full border border-border bg-background text-sm text-muted-foreground">
                      {edu.year}
                    </span>
                    <span className="text-sm font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={cardClass}
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Certifications
            </p>
            <div className="grid gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-border last:pb-0 last:border-b-0"
                >
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
