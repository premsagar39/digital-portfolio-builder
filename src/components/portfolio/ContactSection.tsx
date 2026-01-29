import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "premsagarsingara39@gmail.com",
    href: "mailto:premsagarsingara39@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/premsagar123",
    href: "https://linkedin.com/in/premsagar123",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/premsagar39",
    href: "https://github.com/premsagar39",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7671095518",
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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Currently open for opportunities in Data Analytics and Business Intelligence. 
            Feel free to connect with me through any of the platforms below!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(187 85% 53% / 0.3)" }}
                className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
        >
          <MapPin size={18} className="text-primary" />
          <span>Gooty, Andhra Pradesh, India</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
