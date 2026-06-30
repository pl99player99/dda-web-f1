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

  // Importante: ao ficar visível, removemos a classe de transform por completo
  // (em vez de usar translate-y-0) para não quebrar `position: sticky` em filhos,
  // já que qualquer valor de transform — incluindo translateY(0) — cria um novo
  // bloco de contenção que o sticky não atravessa.
  const translate = variant === "up" && !isVisible ? "translate-y-6" : "";

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
