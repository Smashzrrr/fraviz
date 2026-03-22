import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'relative group border text-foreground mx-auto text-center rounded-full font-semibold transition-all duration-200',
  {
    variants: {
      variant: {
        // Subtle amber/cta glow — matches Fraviz brand
        default: 'bg-cta/5 hover:bg-cta/0 border-cta/25 text-foreground',
        // Solid filled CTA button
        solid: 'bg-cta hover:bg-cta-dark text-background border-transparent',
        // Ghost — minimal, for secondary actions
        ghost: 'border-transparent bg-transparent hover:border-border hover:bg-white/5 text-muted hover:text-foreground',
      },
      size: {
        default: 'px-7 py-2 text-sm',
        sm: 'px-4 py-1.5 text-xs',
        lg: 'px-10 py-2.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  neon?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, neon = true, size, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {/* Top edge glow line on hover */}
        <span
          className={cn(
            'absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-cta to-transparent hidden',
            neon && 'block'
          )}
        />
        {children}
        {/* Bottom edge glow line — always subtle */}
        <span
          className={cn(
            'absolute group-hover:opacity-60 opacity-0 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-cta to-transparent hidden',
            neon && 'block'
          )}
        />
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
