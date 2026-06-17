import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary font-semibold text-background shadow-glow-sm hover:bg-sky-300 border border-primary/30 active:bg-sky-400",
  secondary:
    "bg-secondary font-semibold text-background hover:bg-green-400 border border-secondary/30 active:bg-green-500",
  outline:
    "border border-border bg-transparent text-text-primary hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/5 active:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "box-border inline-flex max-w-full items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200",
    focusStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
