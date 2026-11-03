import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Python",
  "SQL (MySQL)",
  "Pandas",
  "NumPy",
  "Matplotlib",
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
];

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    institution: "GATES Institute of Technology, Gooty",
    year: "2022 – 2026",
    score: "CGPA: 75.29%",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Srisai Jr. College, Gooty",
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
    title: "Oracle Analytics Cloud 2025 Certified Professional",
    description: "Skilled in dashboarding, KPI analysis, data modeling, and cloud-based business intelligence.",
    certificateUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=323251959OCIEA25OCP",
  },
  {
    title: "Data Analytics Certification",
    description: "GrowAI - 3 Month Data Analysis Course (March 2025)",
    certificateUrl: "https://www.growaiedtech.com/verify",
  },
  {
    title: "Data Analyst Bootcamp",
    description: "Udemy - The Complete Data Analyst Bootcamp (Sept 2025)",
    certificateUrl: "https://ude.my/UC-5862cff0-8b3e-4246-b12a-5b3e0f9ae5bf",
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
                  className="px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground"
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
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start md:self-auto px-4 py-2 rounded-full border border-border bg-background text-sm font-medium hover:bg-secondary transition-colors"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    Certificate
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
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
