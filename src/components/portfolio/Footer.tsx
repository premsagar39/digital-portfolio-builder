import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} <span className="text-primary">Singara Premsagar</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
