export const ROUTES = {
  home: '/',
  care: '/care',
  gallery: '/gallery',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
