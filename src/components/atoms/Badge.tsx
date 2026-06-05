import type { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'custom';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  color?: string;
  className?: string;
}

export function Badge({ children, variant = 'primary', color, className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide';

  if (variant === 'custom' && color) {
    return (
      <span
        className={`${base} text-white ${className}`}
        style={{ backgroundColor: color }}
      >
        {children}
      </span>
    );
  }

  const variantClass: Record<Exclude<BadgeVariant, 'custom'>, string> = {
    primary:   'bg-primary-light text-primary',
    secondary: 'bg-secondary text-dark',
  };

  return (
    <span className={`${base} ${variantClass[variant as Exclude<BadgeVariant, 'custom'>]} ${className}`}>
      {children}
    </span>
  );
}
