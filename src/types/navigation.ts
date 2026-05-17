import type { AppRoute } from '@/constants/routes'

export interface NavItem {
  label: string
  path: AppRoute
  sectionId?: string
}
