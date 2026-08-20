import React from 'react';

export type BadgeVariant =
  | 'lost'
  | 'found'
  | 'matched'
  | 'verified'
  | 'pending'
  | 'rejected'
  | 'recovered'
  | 'neutral'
  | 'primary';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, { bg: string; text: string; dotBg: string; border: string }> = {
  lost: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    dotBg: 'bg-red-500',
    border: 'border-red-500/20',
  },
  found: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    dotBg: 'bg-blue-500',
    border: 'border-blue-500/20',
  },
  matched: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    dotBg: 'bg-purple-500',
    border: 'border-purple-500/20',
  },
  verified: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    dotBg: 'bg-emerald-500',
    border: 'border-emerald-500/20',
  },
  pending: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    dotBg: 'bg-amber-500',
    border: 'border-amber-500/20',
  },
  rejected: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    dotBg: 'bg-red-500',
    border: 'border-red-500/20',
  },
  recovered: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    dotBg: 'bg-emerald-500',
    border: 'border-emerald-500/20',
  },
  neutral: {
    bg: 'bg-gray-500/10',
    text: 'text-gray-400',
    dotBg: 'bg-gray-400',
    border: 'border-gray-500/20',
  },
  primary: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    dotBg: 'bg-indigo-500',
    border: 'border-indigo-500/20',
  },
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const styles = variantClasses[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${styles.bg} ${styles.text} ${styles.border} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${styles.dotBg}`} />}
      {children}
    </span>
  );
};
