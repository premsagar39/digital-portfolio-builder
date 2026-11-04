import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, MessageCircle, Linkedin, Github } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:premsagarsingara39@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/premsagar123" },
  { icon: Github, label: "GitHub", href: "https://github.com/premsagar39" },
  { icon: Phone, label: "Phone", href: "tel:+917671095518" },
];

const whatsappHref =
  "https://wa.me/917671095518?text=Hi%20Premsagar%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-16" aria-label="Contact Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-10 md:mb-14"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-card border border-border p-8 md:p-12 lg:p-16 shadow-sm"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Get in Touch
          </p>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
            Currently open for opportunities in Data Analysis and Business
            Intelligence. Feel free to connect with me through any of the
            platforms below.
          </p>

          <address className="not-italic flex flex-col gap-3 mb-10 text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              Gooty, Andhra Pradesh, India
            </span>
            <a href="tel:+917671095518" className="flex items-center gap-2 hover:text-foreground transition-colors w-fit">
              <Phone size={16} aria-hidden="true" />
              +91-7671095518
            </a>
            <a
              href="mailto:premsagarsingara39@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
            >
              <Mail size={16} aria-hidden="true" />
              premsagarsingara39@gmail.com
            </a>
          </address>

          <nav aria-label="Social media links" className="flex flex-wrap gap-3 mb-10">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:bg-secondary transition-colors"
                  aria-label={`Connect on ${link.label}`}
                >
                  <Icon size={16} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/85 transition-all duration-300"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Message me on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
