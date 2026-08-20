import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className = '',
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`inline-block w-px self-stretch bg-white/10 ${className}`}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={`flex items-center my-4 ${className}`}
        {...props}
      >
        <div className="flex-grow h-px bg-white/10" />
        <span className="px-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
          {label}
        </span>
        <div className="flex-grow h-px bg-white/10" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`w-full h-px bg-white/10 my-4 ${className}`}
      {...props}
    />
  );
};
