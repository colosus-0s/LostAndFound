import React from 'react';

export type CardVariant = 'surface' | 'elevated' | 'overlay' | 'glass';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  interactive?: boolean;
  padded?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  surface: 'bg-[#121318] border border-white/[0.08]',
  elevated: 'bg-[#1a1c23] border border-white/[0.08] shadow-lg shadow-black/40',
  overlay: 'bg-[#181a20] border border-white/[0.12] shadow-xl shadow-black/50',
  glass: 'bg-[#121318]/75 backdrop-blur-md border border-white/[0.08]',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  interactive = false,
  padded = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-200 ${variantClasses[variant]} ${
        padded ? 'p-6' : ''
      } ${
        interactive
          ? 'hover:border-indigo-500/30 hover:shadow-indigo-500/5 hover:-translate-y-0.5 cursor-pointer'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`flex flex-col space-y-1.5 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3 className={`text-lg font-semibold text-gray-100 tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`flex items-center pt-4 mt-4 border-t border-white/[0.08] ${className}`} {...props}>
    {children}
  </div>
);
