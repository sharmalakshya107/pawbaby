import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'mx-auto max-w-4xl text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display-lg text-headline-lg-mobile text-primary md:text-headline-lg">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-body-lg text-body-lg text-on-surface-variant">{subtitle}</p>
      ) : null}
    </div>
  )
}
