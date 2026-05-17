import { cn } from '@/utils/cn'

interface IconProps {
  name: string
  filled?: boolean
  className?: string
  size?: number
}

export function Icon({ name, filled = false, className, size = 24 }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined leading-none', className)}
      style={{
        fontSize: size,
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
      aria-hidden
    >
      {name}
    </span>
  )
}
