import { ROUTES } from '@/constants/routes'
import type { NavItem } from '@/types/navigation'

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Experience', path: ROUTES.home, sectionId: 'experience' },
  { label: 'Our Care', path: ROUTES.care },
  { label: 'Gallery', path: ROUTES.gallery },
  { label: 'Book Stay', path: ROUTES.home, sectionId: 'book-stay' },
]
