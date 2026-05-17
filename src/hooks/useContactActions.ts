import { useCallback } from 'react'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { ROUTES } from '@/constants/routes'

/** Prefer ContactLink / StayContactLink anchors. This hook only handles scroll-to-book. */
export function useContactActions() {
  const scrollToSection = useScrollToSection()

  const scrollToBookStay = useCallback(() => {
    scrollToSection(ROUTES.home, 'book-stay')
  }, [scrollToSection])

  return { scrollToBookStay }
}
