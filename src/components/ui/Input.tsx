import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full bg-[#fcfbfa] border border-foreground/15 px-4 py-2 text-sm text-foreground placeholder:text-stone-400 focus:outline-none focus:border-foreground focus:ring-1 focus:ring-[#2c2420] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm shadow-stone-100",
          className
        )}
        style={{ borderRadius: "0.3rem" }}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
