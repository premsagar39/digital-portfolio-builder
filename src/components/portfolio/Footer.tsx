import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-10"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} <span className="text-foreground font-medium">Premsagar</span>. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
