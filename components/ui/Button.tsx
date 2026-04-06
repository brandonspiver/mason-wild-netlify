import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "ghost" | "ghost-light" | "outline-light";

interface ButtonProps {
  href:     string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?:   boolean;
  className?:string;
}

const base =
  "inline-flex items-center gap-3 font-sans text-2xs font-normal tracking-wide uppercase transition-colors duration whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light px-7 py-[13px]",
  ghost:
    "text-stone-600 hover:text-forest border-b border-stone-300 hover:border-forest pb-[2px]",
  "ghost-light":
    "text-white/70 hover:text-forest border-b border-white/28 hover:border-forest pb-[2px]",
  "outline-light":
    "text-white/70 hover:text-white border border-white/22 hover:border-white/48 px-7 py-[13px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow   = true,
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
      {arrow && (
        <span
          className="inline-block font-normal not-italic transition-transform duration group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </Link>
  );
}
