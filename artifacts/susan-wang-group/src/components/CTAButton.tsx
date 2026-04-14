import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export function CTAButton({ children, href, variant = "default", className = "", showArrow = false, onClick, type = "button" }: CTAButtonProps) {
  const base = `inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 group select-none`;

  const styles = {
    default: `px-8 py-4 bg-foreground text-white hover:bg-foreground/90 ${className}`,
    outline: `px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-white ${className}`,
    ghost: `text-foreground/70 hover:text-foreground border-b border-transparent hover:border-foreground/40 pb-0.5 ${className}`,
  };

  const inner = (
    <>
      <span>{children}</span>
      {(showArrow || variant === "ghost") && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        <span className={`${base} ${styles[variant]}`}>{inner}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {inner}
    </button>
  );
}
