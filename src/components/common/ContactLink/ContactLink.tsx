import { CONTACT } from '@/constants/contact'
import {
  getStayContactUrls,
  buildMapsUrl,
  buildTelUrl,
  buildWhatsAppUrlByKey,
  type WhatsAppMessageKey,
} from '@/utils/contact'
import type { ContactChannel, StayOptionId } from '@/constants/content/stayOptions'
import { cn } from '@/utils/cn'

interface ContactAnchorProps {
  href: string
  className?: string
  children: React.ReactNode
  external?: boolean
  ariaLabel?: string
}

function ContactAnchor({
  href,
  className,
  children,
  external = false,
  ariaLabel,
}: ContactAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}
    </a>
  )
}

export function WhatsAppLink({
  messageKey = 'default',
  stayId,
  className,
  children,
}: {
  messageKey?: WhatsAppMessageKey
  stayId?: StayOptionId
  className?: string
  children: React.ReactNode
}) {
  const href = stayId
    ? getStayContactUrls(stayId, 'whatsapp')
    : buildWhatsAppUrlByKey(messageKey)

  return (
    <ContactAnchor href={href} className={className} external ariaLabel="Chat on WhatsApp">
      {children}
    </ContactAnchor>
  )
}

export function PhoneLink({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <ContactAnchor
      href={buildTelUrl()}
      className={className}
      ariaLabel={`Call ${CONTACT.phoneDisplay}`}
    >
      {children}
    </ContactAnchor>
  )
}

export function EmailLink({
  subject = 'PawBaby Homestay enquiry',
  body,
  stayId,
  className,
  children,
}: {
  subject?: string
  body?: string
  stayId?: StayOptionId
  className?: string
  children: React.ReactNode
}) {
  const href = stayId
    ? getStayContactUrls(stayId, 'email')
    : `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

  return (
    <ContactAnchor href={href} className={className} ariaLabel="Send email">
      {children}
    </ContactAnchor>
  )
}

export function MapsLink({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <ContactAnchor href={buildMapsUrl()} className={className} external ariaLabel="Open location in maps">
      {children}
    </ContactAnchor>
  )
}

export function StayContactLink({
  stayId,
  channel,
  className,
  children,
  disabled = false,
}: {
  stayId: StayOptionId
  channel: ContactChannel
  className?: string
  children: React.ReactNode
  disabled?: boolean
}) {
  if (disabled) {
    return (
      <span
        className={cn(className, 'pointer-events-none cursor-not-allowed opacity-40')}
        aria-disabled
      >
        {children}
      </span>
    )
  }

  const href = getStayContactUrls(stayId, channel)
  const external = channel === 'whatsapp'

  return (
    <ContactAnchor href={href} className={className} external={external}>
      {children}
    </ContactAnchor>
  )
}
