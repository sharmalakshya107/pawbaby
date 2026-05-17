import { cn } from '@/utils/cn'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
}: OptimizedImageProps) {
  return (
    <img src={src} alt={alt} loading={loading} className={cn('object-cover', className)} />
  )
}
