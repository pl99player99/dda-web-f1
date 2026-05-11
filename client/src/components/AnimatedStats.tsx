import { useEffect, useRef, useState } from "react";

interface StatItem {
  numericValue: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}

function StatCounter({ stat }: { stat: StatItem }) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const duration = 1800;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = stat.numericValue * eased;
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, stat.numericValue]);

  const decimals = stat.decimals ?? 0;
  const display =
    (stat.prefix ?? "") +
    (decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString()) +
    (stat.suffix ?? "");

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-4xl text-accent mb-1 group-hover:scale-110 transition-transform duration-300 tabular-nums">
        {display}
      </div>
      <p className="font-medium text-sm mb-0.5">{stat.label}</p>
      <p className="text-xs text-muted-foreground">{stat.sub}</p>
    </div>
  );
}

export const homeStats: StatItem[] = [
  {
    numericValue: 50,
    suffix: "+",
    label: "Projetos Entregues",
    sub: "e crescendo",
  },
  {
    numericValue: 98,
    suffix: "%",
    label: "Clientes Satisfeitos",
    sub: "taxa de aprovação",
  },
  {
    numericValue: 7,
    suffix: " dias",
    label: "Entrega Média",
    sub: "para sites",
  },
  {
    numericValue: 3.2,
    decimals: 1,
    suffix: "x",
    label: "ROI Médio",
    sub: "nos nossos projetos",
  },
];

export default function AnimatedStats({ stats = homeStats }: { stats?: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, idx) => (
        <StatCounter key={idx} stat={stat} />
      ))}
    </div>
  );
}
