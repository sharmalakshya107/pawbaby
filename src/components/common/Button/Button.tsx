import { forwardRef } from 'react'
import { useMagneticPointer } from '@/hooks/useMagneticPointer'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  magnetic?: boolean
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
  secondary:
    'bg-secondary-container text-on-secondary-container hover:scale-105',
  glass:
    'glass-card text-primary border border-outline/30 hover:bg-surface-variant/40',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    magnetic = false,
    fullWidth = false,
    className,
    children,
    type = 'button',
    onMouseMove,
    onMouseLeave,
    ...props
  },
  ref,
) {
  const magneticHandlers = useMagneticPointer<HTMLButtonElement>()

  return (
    <button
      ref={magnetic ? magneticHandlers.ref : ref}
      type={type}
      onMouseMove={magnetic ? magneticHandlers.onMouseMove : onMouseMove}
      onMouseLeave={magnetic ? magneticHandlers.onMouseLeave : onMouseLeave}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-10 py-4 font-body text-body-md font-bold transition-all active:scale-95',
        variantClasses[variant],
        magnetic && 'magnetic-effect',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})
