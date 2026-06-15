import { motion } from "motion/react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-background)] font-sans">
      <div className="text-center space-y-6 max-w-sm px-6">
        <div className="relative flex justify-center items-center">
          {/* Elegant geometric spinner representing geometric furniture composition */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="w-16 h-16 border-t border-b border-foreground rounded-sm"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="absolute w-10 h-10 border-l border-r border-foreground/30 rounded-full"
          />
        </div>
        <div className="space-y-2">
          <motion.h3 
            initial={{ letterSpacing: "0.15em" }}
            animate={{ letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="text-xs uppercase font-semibold text-foreground tracking-widest"
          >
            FORMA & DREWNO
          </motion.h3>
          <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase">
            Ładowanie manufaktury...
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="space-y-4">
      <div className="aspect-[4/5] bg-stone-200/50 rounded-sm animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-stone-200/50 w-2/3 rounded-sm animate-pulse" />
        <div className="h-3 bg-stone-200/50 w-full rounded-sm animate-pulse" />
        <div className="h-3 bg-stone-200/50 w-1/2 rounded-sm animate-pulse" />
      </div>
    </div>
  );
}
