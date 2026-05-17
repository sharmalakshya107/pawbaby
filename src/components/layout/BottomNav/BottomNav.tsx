import { Icon } from '@/components/common/Icon/Icon'
import { MapsLink, PhoneLink, WhatsAppLink } from '@/components/common/ContactLink/ContactLink'
import { useContactActions } from '@/hooks/useContactActions'
import { cn } from '@/utils/cn'

export function BottomNav() {
  const { scrollToBookStay } = useContactActions()

  const itemClass =
    'flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-2 py-1 text-on-surface-variant transition-colors hover:bg-surface-variant/50'

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around gap-1 border-t border-outline-variant/20 bg-surface/90 px-2 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-lg md:hidden">
      <WhatsAppLink
        messageKey="default"
        className={itemClass}
      >
        <Icon name="chat" />
        <span className="font-label-sm text-label-sm">WhatsApp</span>
      </WhatsAppLink>
      <PhoneLink className={itemClass}>
        <Icon name="call" />
        <span className="font-label-sm text-label-sm">Call</span>
      </PhoneLink>
      <MapsLink className={itemClass}>
        <Icon name="distance" />
        <span className="font-label-sm text-label-sm">Location</span>
      </MapsLink>
      <button
        type="button"
        onClick={scrollToBookStay}
        className={cn(
          itemClass,
          'bg-secondary-container text-on-secondary-container active:scale-95',
        )}
      >
        <Icon name="contact_phone" filled />
        <span className="font-label-sm text-label-sm">Contact</span>
      </button>
    </nav>
  )
}
