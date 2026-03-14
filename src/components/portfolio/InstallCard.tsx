import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePwaInstall } from "@/hooks/use-pwa-install";

const InstallCard = () => {
  const { canInstall, install } = usePwaInstall();
  const [dismissed, setDismissed] = useState(() =>
    sessionStorage.getItem("install-card-dismissed") === "true"
  );

  const visible = canInstall && !dismissed;

  const handleInstall = async () => {
    await install();
    setDismissed(true);
  };

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("install-card-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full bg-card border-b border-border shadow-md overflow-hidden"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3 relative">
              {/* App Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-border shadow-sm">
                <img
                  src="/icons/icon-192x192.png"
                  alt="PREMSAGAR Portfolio App Icon"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  PREMSAGAR Portfolio
                </p>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                  Install this portfolio as an app for quick access and a better experience.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  size="sm"
                  onClick={handleInstall}
                  className="rounded-full text-xs font-semibold px-5 h-8"
                >
                  Install
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Dismiss install prompt"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallCard;
