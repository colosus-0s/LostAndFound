import React from 'react';
import { Button } from './Button';
import type { ButtonProps } from './Button';


export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'fullWidth'> {
  icon: React.ReactNode;
  'aria-label': string;
}

const iconButtonSizes = {
  sm: 'p-1.5 rounded-lg text-xs',
  md: 'p-2 rounded-xl text-sm',
  lg: 'p-3 rounded-xl text-base',
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'md', className = '', 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        aria-label={ariaLabel}
        className={`${iconButtonSizes[size]} ${className}`}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
