import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "line" | "dots";
  className?: string;
}

const SectionDivider = ({ variant = "wave", className }: SectionDividerProps) => {
  if (variant === "line") {
    return (
      <div className={cn("w-full flex justify-center py-8", className)}>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("w-full flex justify-center gap-3 py-8", className)}>
        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
      </div>
    );
  }

  // Wave variant (default)
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 md:h-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20C200 35 400 5 600 20C800 35 1000 5 1200 20"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
