import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  active: boolean;
}

export function SlideLayout({ children, className, active }: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-start justify-center px-8 pt-14 pb-24 overflow-x-hidden overflow-y-auto transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]",
        active
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-[60px] pointer-events-none",
        className
      )}
    >
      <div className="slide-content max-w-[900px] w-full mx-auto">{children}</div>
    </div>
  );
}

interface OverlineProps {
  children: React.ReactNode;
  variant?: "pink" | "sage";
}

export function Overline({ children, variant = "sage" }: OverlineProps) {
  return (
    <p
      className={cn(
        "stagger-item text-sm font-semibold uppercase tracking-[0.15em] mb-2",
        variant === "pink" ? "text-pink-500" : "text-sage-500"
      )}
    >
      {children}
    </p>
  );
}

interface BlobProps {
  color: "pink" | "sage";
  className?: string;
}

export function Blob({ color, className }: BlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full opacity-12 blur-[60px] pointer-events-none",
        color === "pink" ? "bg-pink-300" : "bg-sage-300",
        className
      )}
    />
  );
}
