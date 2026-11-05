import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Store, Users } from "lucide-react";

const projects = [
  {
    title: "Business Sales Insights Dashboard",
    subtitle: "Sales analytics · MySQL + Power BI",
    description:
      "Identified leadership's lack of visibility into revenue drivers. Wrote 50+ optimized SQL queries on 1,800+ records and built a Power BI KPI dashboard, uncovering that 22% of revenue was concentrated in 2 product categories. Delivered self-serve interactive slicers and drill-through reports.",
    tools: ["MySQL", "Power BI", "DAX"],
    achievement: "Enabled targeted pricing & inventory strategy",
    icon: BarChart3,
    githubUrl: "https://github.com/premsagar39/superstore-sales-analysis",
  },
  {
    title: "Zomato Restaurant Performance Dashboard",
    subtitle: "Market analysis · Power BI",
    description:
      "Built an end-to-end Power BI dashboard analyzing 9,551 restaurants across 15 countries and 4M+ user votes. Identified high-growth cuisine segments — North Indian (3,960 units) and Chinese (2,735 units). Performed time-series and correlation analysis revealing 63.88% of non-delivery restaurants had lower popularity.",
    tools: ["Power BI", "DAX", "Power Query"],
    achievement: "Data-driven market expansion insights",
    icon: Store,
    githubUrl: "https://github.com/premsagar39/zomato-restaurant-analysis-powerbi",
  },
  {
    title: "Customer Churn Analysis",
    subtitle: "Telecom analytics · Python",
    description:
      "Decomposed the telecom churn problem into testable hypotheses across contract type, tenure, and charges. Analyzed 7,000+ records using Pandas and NumPy — identifying a 27% churn rate among month-to-month customers and translating findings into actionable retention strategies.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    achievement: "Identified 27% churn rate & retention strategies",
    icon: Users,
    githubUrl: "https://github.com/premsagar39/telecom-Customer-Churn-Analysis",
  },
];

const doorEase = [0.65, 0, 0.35, 1] as const;

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16" aria-label="Data Analysis Projects by Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-10 md:mb-14"
        >
          Projects
        </motion.h2>

        <p className="text-muted-foreground max-w-xl mb-10 md:mb-14 -mt-6 md:-mt-10">
          Dashboards and analyses researched, built and documented — each links to
          the full project on GitHub.
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-[2rem] bg-card border border-border p-8 md:p-12 shadow-sm grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-14 items-center overflow-hidden"
              >
                <div>
                  <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Data Analysis
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="flex items-start gap-2 text-sm text-muted-foreground mb-7">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                    {project.achievement}
                  </p>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:bg-secondary hover:scale-[1.03] transition-all duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View on GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="hidden lg:flex w-56 h-56 rounded-3xl bg-secondary items-center justify-center" aria-hidden="true">
                  <Icon size={64} strokeWidth={1.5} className="text-foreground/60 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Magic doors cover — two halves slide apart on hover (desktop) */}
                <div aria-hidden="true" className="hidden lg:block absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-y-0 left-0 w-1/2 bg-secondary transition-transform duration-700 group-hover:-translate-x-full group-focus-within:-translate-x-full border-r border-border/60"
                    style={{ transitionTimingFunction: `cubic-bezier(${doorEase.join(",")})` }}
                  >
                    <div className="h-full flex items-center justify-center gap-4">
                      <span className="font-display text-7xl font-bold text-foreground/25 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon size={44} strokeWidth={1.2} className="text-foreground/25" />
                    </div>
                  </div>
                  <div
                    className="absolute inset-y-0 right-0 w-1/2 bg-secondary transition-transform duration-700 group-hover:translate-x-full group-focus-within:translate-x-full border-l border-border/60"
                    style={{ transitionTimingFunction: `cubic-bezier(${doorEase.join(",")})` }}
                  >
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Hover to open
                      </span>
                      <span className="w-px h-10 bg-border" />
                      <span className="font-display text-xl font-bold text-foreground/70">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
