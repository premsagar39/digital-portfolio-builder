import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:premsagarsingara39@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/premsagar123",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/premsagar39",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+917671095518",
  },
];

const whatsappHref =
  "https://wa.me/917671095518?text=Hi%20Premsagar%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative" aria-label="Contact Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Currently open for opportunities in Data Analysis and Business Intelligence. 
            Feel free to connect with me through any of the platforms below!
          </p>

          <address className="not-italic flex flex-col items-center gap-3 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" aria-hidden="true" />
              <span>Gooty, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" aria-hidden="true" />
              <a href="tel:+917671095518" className="hover:text-primary transition-colors">+91-7671095518</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" aria-hidden="true" />
              <a href="mailto:premsagarsingara39@gmail.com" className="hover:text-primary transition-colors">premsagarsingara39@gmail.com</a>
            </div>
          </address>

          <Button
            asChild
            size="lg"
            className="rounded-full px-8 font-semibold"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Message me on WhatsApp
            </a>
          </Button>
        </motion.div>

        <nav aria-label="Social media links" className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-card/50 backdrop-blur-sm transition-all duration-300"
                aria-label={`Connect on ${link.label}`}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default ContactSection;
