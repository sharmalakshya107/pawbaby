import { cn } from '@/utils/cn'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
  style?: React.CSSProperties
}

export function Reveal({ children, className, delayMs = 0, style }: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'active', className)}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
    >
      {children}
    </div>
  )
}
