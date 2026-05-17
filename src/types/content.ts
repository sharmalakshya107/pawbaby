import type { WHATSAPP_MESSAGES } from '@/constants/contact'

export interface ReviewCard {
  id: string
  author: string
  subtitle?: string
  quote: string
  avatarSrc: string
  avatarAlt: string
}

export interface BentoFeature {
  id: string
  title: string
  description?: string
  badge?: string
  imageSrc: string
  imageAlt: string
  span: 'large' | 'small'
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface CareStandard {
  id: string
  icon: string
  title: string
  description: string
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface WhyChooseCard {
  id: string
  icon: string
  title: string
  description: string
}

export interface CarePromiseItem {
  id: string
  icon: string
  title: string
  description: string
}
