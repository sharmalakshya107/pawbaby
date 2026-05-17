import { CONTACT, WHATSAPP_MESSAGES } from '@/constants/contact'
import {
  STAY_CONTACT_MESSAGES,
  type ContactChannel,
  type StayOptionId,
} from '@/constants/content/stayOptions'

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES

function encodeMessage(message: string): string {
  return encodeURIComponent(message)
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeMessage(message)}`
}

export function buildWhatsAppUrlByKey(messageKey: WhatsAppMessageKey = 'default'): string {
  return buildWhatsAppUrl(WHATSAPP_MESSAGES[messageKey])
}

export function buildTelUrl(): string {
  return `tel:${CONTACT.phoneE164}`
}

export function buildMailtoUrl(subject: string, body?: string): string {
  const params = new URLSearchParams()
  params.set('subject', subject)
  if (body) params.set('body', body)
  return `mailto:${CONTACT.email}?${params.toString()}`
}

export function buildMapsUrl(): string {
  const query = encodeURIComponent(CONTACT.mapsQuery)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function getStayContactUrls(
  stayId: StayOptionId,
  channel: ContactChannel,
): string {
  const messages = STAY_CONTACT_MESSAGES[stayId]

  switch (channel) {
    case 'whatsapp':
      return buildWhatsAppUrl(messages.whatsapp)
    case 'phone':
      return buildTelUrl()
    case 'email':
      return buildMailtoUrl(messages.emailSubject, messages.emailBody)
    default: {
      const exhaustive: never = channel
      return exhaustive
    }
  }
}
