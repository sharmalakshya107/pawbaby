import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import { cn } from '@/utils/cn'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function TiltCard({ children, className, disabled = false }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 24,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 24,
  })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={cn('card-3d', className)}
      style={{
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={disabled ? undefined : { scale: 1.02, z: 40 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
