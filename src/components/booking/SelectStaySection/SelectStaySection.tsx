import {
  EmailLink,
  MapsLink,
  PhoneLink,
  WhatsAppLink,
} from '@/components/common/ContactLink/ContactLink'
import { Icon } from '@/components/common/Icon/Icon'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { STAY_SECTION, type ContactChannel } from '@/constants/content/stayOptions'
import { cn } from '@/utils/cn'

type ContactActionId = ContactChannel | 'location'

const CONTACT_CHANNELS: { id: ContactActionId; label: string; icon: string }[] = [
  { id: 'whatsapp', label: 'WhatsApp', icon: 'chat' },
  { id: 'phone', label: 'Call', icon: 'call' },
  { id: 'email', label: 'Email', icon: 'mail' },
  { id: 'location', label: 'Location', icon: 'distance' },
]

export function SelectStaySection() {
  return (
    <section
      id="book-stay"
      className="relative overflow-hidden bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="mb-6 text-center sm:mb-8">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            Reach Us
          </span>
          <h2 className="mt-4 font-display-lg text-headline-lg-mobile text-primary sm:mt-6 md:text-headline-lg">
            {STAY_SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body-md text-body-md text-on-surface-variant sm:mt-6 sm:font-body-lg sm:text-body-lg">
            {STAY_SECTION.subtitle}
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="glass-card mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl border border-outline-variant/30 p-3 sm:p-5 md:p-10 text-center shadow-[0_24px_80px_-48px_rgba(68,42,34,0.55)]">
            <h3 className="font-headline-sm sm:font-headline-md md:font-headline-md text-headline-sm sm:text-headline-md md:text-headline-md text-primary">
              {STAY_SECTION.contactTitle}
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-4 font-body-xs sm:font-body-sm md:font-body-md text-body-xs sm:text-body-sm md:text-body-md text-on-surface-variant">
              {STAY_SECTION.contactHint}
            </p>

            <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
              {CONTACT_CHANNELS.map((channel) => {
                const className = cn(
                  'premium-action group flex min-h-16 sm:min-h-20 md:min-h-28 flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 rounded-lg sm:rounded-xl md:rounded-2xl px-2 sm:px-4 md:px-4 py-3 sm:py-4 md:py-5 font-body-xs sm:font-body-sm md:font-body-md text-body-xs sm:text-body-sm md:text-body-md font-bold',
                  channel.id === 'whatsapp'
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-primary text-on-primary',
                )
                const content = (
                  <>
                    <Icon
                      name={channel.icon}
                      size={channel.id === 'whatsapp' ? 24 : 20}
                      className="transition-transform duration-300 group-hover:scale-110 sm:text-2xl md:text-3xl"
                      filled={channel.id === 'whatsapp'}
                    />
                    <span className="leading-tight">{channel.label}</span>
                  </>
                )

                if (channel.id === 'whatsapp') {
                  return (
                    <WhatsAppLink key={channel.id} className={className}>
                      {content}
                    </WhatsAppLink>
                  )
                }

                if (channel.id === 'phone') {
                  return (
                    <PhoneLink key={channel.id} className={className}>
                      {content}
                    </PhoneLink>
                  )
                }

                if (channel.id === 'location') {
                  return (
                    <MapsLink key={channel.id} className={className}>
                      {content}
                    </MapsLink>
                  )
                }

                return (
                  <EmailLink key={channel.id} className={className}>
                    {content}
                  </EmailLink>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
