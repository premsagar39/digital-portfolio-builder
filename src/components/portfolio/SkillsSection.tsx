import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code, Database, Table, Calculator, BarChart3, PieChart, 
  LineChart, FileSpreadsheet, Search, TrendingUp, Sparkles, 
  Settings, Filter, Gauge, Brain, FileCode, ExternalLink
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code },
  { name: "SQL (MySQL)", icon: Database },
  { name: "Pandas", icon: Table },
  { name: "NumPy", icon: Calculator },
  { name: "Matplotlib", icon: BarChart3 },
  { name: "Power BI", icon: PieChart },
  { name: "Tableau", icon: LineChart },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "EDA", icon: Search },
  { name: "Statistical Analysis", icon: TrendingUp },
  { name: "Data Cleaning", icon: Sparkles },
  { name: "ETL Processes", icon: Settings },
  { name: "KPI Reporting", icon: Gauge },
  { name: "Dashboard Development", icon: Gauge },
  { name: "Business Intelligence", icon: Brain },
  { name: "DAX", icon: FileCode },
  { name: "Power Query", icon: Filter },
];

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    institution: "GATES Institute of Technology, Gooty",
    year: "2022 – 2026",
    score: "CGPA: 75.83%",
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

type TabType = "skills" | "education" | "certifications";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabType>("skills");

  const tabs: { id: TabType; label: string }[] = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-lg font-semibold transition-colors pb-2 ${
                activeTab === tab.id 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm cursor-default transition-all"
                >
                  <IconComponent size={18} className="text-secondary" />
                  <span className="text-foreground font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 max-w-2xl mx-auto"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border text-center transition-all"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {edu.year}
                </span>
                <h4 className="font-display text-xl font-semibold text-primary mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-foreground font-medium">{edu.score}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 max-w-2xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
                className="block p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border text-center transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h4 className="font-display text-lg font-semibold text-primary">{cert.title}</h4>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground">{cert.description}</p>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
