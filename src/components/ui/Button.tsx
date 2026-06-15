import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-[#3d332d] shadow-md shadow-foreground/10",
      secondary: "bg-[#e8e4dc] text-foreground hover:bg-[#dedad0] shadow-sm",
      outline: "border border-foreground/20 bg-transparent text-foreground hover:bg-[#e8e4dc]/20 hover:border-foreground/50",
      ghost: "text-foreground hover:bg-[#e8e4dc]/30",
      dark: "bg-[#181816] text-background hover:bg-[#20201e]"
    };

    const sizes = {
      sm: "px-4 py-2 text-xs uppercase tracking-wider",
      md: "px-6 py-3 text-sm uppercase tracking-wider",
      lg: "px-8 py-4 text-base uppercase tracking-wider"
    };

    const style = {
      borderRadius: "0.3rem"
    };

    return (
      <motion.button
        ref={ref}
        style={style}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ y: 0, scale: 0.99 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
