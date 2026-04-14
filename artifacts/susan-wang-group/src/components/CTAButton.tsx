import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CTAButton({ children, href, variant = "default", className = "", ...props }: React.ComponentProps<typeof Button> & { href?: string }) {
  const btn = (
    <Button 
      variant={variant} 
      className={`rounded-none px-8 py-6 text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:bg-foreground hover:text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );

  if (href) {
    return <Link href={href} className="inline-block">{btn}</Link>;
  }

  return btn;
}
