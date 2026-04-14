import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  variant?: "default" | "large";
}

export function SectionHeading({ title, subtitle, align = "center", className = "", variant = "default" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl flex flex-col items-center" : "text-left max-w-2xl"} ${className}`}>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center text-primary text-sm tracking-widest uppercase font-medium mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}
        >
          <div className="w-8 h-[1px] bg-primary mr-3"></div>
          {subtitle}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`${variant === "large" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"} font-light text-foreground tracking-[-0.02em] md:tracking-[-0.01em]`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
