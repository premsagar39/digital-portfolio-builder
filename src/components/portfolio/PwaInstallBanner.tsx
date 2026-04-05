import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";

const PwaInstallBanner = () => {
  const { canInstall, install } = usePwaInstall();
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem("pwa-dismissed") === "true"
  );

  const show = canInstall && !dismissed;

  const handleDismiss = () => {
    sessionStorage.setItem("pwa-dismissed", "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/95 backdrop-blur-md px-4 py-2.5 shadow-lg">
            <button
              onClick={install}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Download size={16} />
              Add to Home Screen
            </button>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              className="rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PwaInstallBanner;
