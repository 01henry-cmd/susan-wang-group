import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends React.ComponentProps<typeof Button> {
  href?: string;
  showArrow?: boolean;
}

export function CTAButton({ children, href, variant = "default", className = "", showArrow = true, ...props }: CTAButtonProps) {
  const isOutline = variant === "outline";
  
  const btn = (
    <Button 
      variant={variant} 
      className={`rounded-none px-8 py-6 text-sm tracking-wider uppercase font-medium transition-all duration-500 group relative overflow-hidden
        ${isOutline 
          ? "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white" 
          : "bg-foreground text-white hover:bg-foreground/90 border border-transparent hover:border-foreground/90"}
        ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isOutline ? 'group-hover:text-white' : ''}`} />
        )}
      </span>
      {/* Decorative thin bottom line on hover for primary buttons */}
      {!isOutline && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
      )}
    </Button>
  );

  if (href) {
    return <Link href={href} className="inline-block">{btn}</Link>;
  }

  return btn;
}
