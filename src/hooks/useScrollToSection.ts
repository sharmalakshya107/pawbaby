import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { AppRoute } from '@/constants/routes'

export function useScrollToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (path: AppRoute, sectionId?: string) => {
      const scrollToId = () => {
        if (!sectionId) return
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      if (location.pathname === path) {
        scrollToId()
        return
      }

      navigate(path)
      if (sectionId) {
        window.setTimeout(scrollToId, 150)
      }
    },
    [location.pathname, navigate],
  )
}
