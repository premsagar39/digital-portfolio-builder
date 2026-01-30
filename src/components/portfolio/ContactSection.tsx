import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

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

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative">
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
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Currently open for opportunities in Data Analysis and Business Intelligence. 
            Feel free to connect with me through any of the platforms below!
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Gooty, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>+91-7671095518</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>premsagarsingara39@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-8">
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
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
