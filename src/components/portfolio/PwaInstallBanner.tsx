import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { Button } from "@/components/ui/button";

const PwaInstallBanner = () => {
  const { canInstall, install } = usePwaInstall();
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem("pwa-dismissed") === "true");

  const show = canInstall && !dismissed;

  const handleDismiss = () => {
    sessionStorage.setItem("pwa-dismissed", "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-3 shadow-xl">
            <img
              src={pwaIcon}
              alt="Premsagar Portfolio"
              className="h-12 w-12 shrink-0 rounded-full ring-2 ring-primary/20 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">Premsagar Portfolio</p>
              <p className="text-xs text-muted-foreground">Install for quick access</p>
            </div>
            <Button size="sm" onClick={install} className="shrink-0 rounded-full px-4">
              Install
            </Button>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              className="shrink-0 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PwaInstallBanner;
