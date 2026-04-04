import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BarChart3, Database, TrendingUp, Users, Store } from "lucide-react";

const projects = [
  {
    title: "Business Sales Insights Dashboard",
    description: "Identified leadership's lack of visibility into revenue drivers. Wrote 50+ optimized SQL queries on 1,800+ records and built a Power BI KPI dashboard, uncovering that 22% of revenue was concentrated in 2 product categories. Delivered self-serve interactive slicers and drill-through reports.",
    tools: ["MySQL", "Power BI", "DAX"],
    achievement: "Enabled targeted pricing & inventory strategy",
    icon: Database,
    githubUrl: "https://github.com/premsagar39",
  },
  {
    title: "Zomato Restaurant Performance Dashboard",
    description: "Built an end-to-end Power BI dashboard analyzing 9,551 restaurants across 15 countries and 4M+ user votes. Identified high-growth cuisine segments — North Indian (3,960 units) and Chinese (2,735 units). Performed time-series and correlation analysis revealing 63.88% of non-delivery restaurants had lower popularity.",
    tools: ["Power BI", "DAX", "Power Query"],
    achievement: "Data-driven market expansion insights",
    icon: Store,
    githubUrl: "https://github.com/premsagar39/zomato-restaurant-analysis-powerbi",
  },
  {
    title: "Customer Churn Analysis",
    description: "Decomposed the telecom churn problem into testable hypotheses across contract type, tenure, and charges. Analyzed 7,000+ records using Pandas and NumPy — identifying a 27% churn rate among month-to-month customers and translating findings into actionable retention strategies.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    achievement: "Identified 27% churn rate & retention strategies",
    icon: Users,
    githubUrl: "https://github.com/premsagar39/telecom-Customer-Churn-Analysis",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" aria-label="Data Analysis Projects by Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  aria-label={`View ${project.title} project on GitHub`}
                >
                  <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center" aria-hidden="true">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <motion.div
                        whileHover={{ rotate: -45 }}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        aria-hidden="true"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp size={16} className="text-primary" aria-hidden="true" />
                      <span className="text-primary font-medium">{project.achievement}</span>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
