import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode, RefObject } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade";
}

export default function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const translate = variant === "up" ? (isVisible ? "translate-y-0" : "translate-y-6") : "";

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${translate} ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
