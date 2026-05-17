import { useCallback, useRef, type MouseEvent } from 'react'

interface MagneticOptions {
  strength?: number
}

export function useMagneticPointer<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {},
) {
  const { strength = 0.15 } = options
  const ref = useRef<T>(null)

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength],
  )

  const onMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.style.transform = 'translate(0px, 0px)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
