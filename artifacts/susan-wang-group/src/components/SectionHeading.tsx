import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", size = "default", className = "" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-[10px] tracking-[0.25em] uppercase text-primary font-medium mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="w-5 h-[1px] bg-primary inline-block shrink-0" />
          {subtitle}
          {align === "center" && <span className="w-5 h-[1px] bg-primary inline-block shrink-0" />}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif font-light tracking-tight text-foreground ${
          size === "large"
            ? "text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            : "text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
