import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Internships", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const localTime = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const localDate = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 md:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Local time widget */}
          <div
            className="hidden md:flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            aria-label="Local time and date"
          >
            <span>Local time</span>
            <span className="font-semibold text-foreground tabular-nums">{localTime}</span>
            <span aria-hidden="true">•</span>
            <span>{localDate}</span>
          </div>

          {/* Mobile */}
          <a
            href="#home"
            className="md:hidden font-display text-lg font-bold text-foreground"
            aria-label="Premsagar - Home"
          >
            Premsagar
          </a>
          <div className="md:hidden">
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border rounded-b-2xl"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
