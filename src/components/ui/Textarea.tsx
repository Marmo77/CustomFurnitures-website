import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full bg-[#fcfbfa] border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-stone-400 focus:outline-none focus:border-foreground focus:ring-1 focus:ring-[#2c2420] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm shadow-stone-100 resize-none",
          className
        )}
        style={{ borderRadius: "0.3rem" }}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
