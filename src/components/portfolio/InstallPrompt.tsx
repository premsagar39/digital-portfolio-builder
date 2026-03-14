import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePwaInstall } from "@/hooks/use-pwa-install";

const InstallPrompt = () => {
  const { canInstall, install } = usePwaInstall();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!canInstall) return;
    const dismissed = sessionStorage.getItem("install-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [canInstall]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("install-dismissed", "true");
  };

  const handleInstall = async () => {
    await install();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
        >
          <div className="bg-card border border-border rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Download className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">Install Our App</p>
              <p className="text-xs text-muted-foreground">Add to home screen for quick access</p>
            </div>
            <div className="flex items-center gap-1">
              <Button size="sm" onClick={handleInstall} className="rounded-xl text-xs px-3">
                Install
              </Button>
              <button onClick={dismiss} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;
