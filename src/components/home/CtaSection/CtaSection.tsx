import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { PhoneLink } from '@/components/common/ContactLink/ContactLink'
import { Icon } from '@/components/common/Icon/Icon'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { CONTACT } from '@/constants/contact'
import { HOME_CTA } from '@/constants/content/home'
import { useContactActions } from '@/hooks/useContactActions'

export function CtaSection() {
  const { scrollToBookStay } = useContactActions()

  return (
    <section className="px-margin-mobile py-section-gap text-center md:px-margin-desktop">
      <Reveal className="mx-auto max-w-4xl">
        <GlassCard className="space-y-5 rounded-2xl border border-outline-variant/30 p-6 shadow-[0_24px_80px_-50px_rgba(68,42,34,0.5)] sm:space-y-6 sm:rounded-3xl sm:p-10 md:rounded-[2.5rem] md:space-y-8 md:p-16">
          <h2 className="font-display-lg text-headline-md text-primary sm:text-headline-lg">{HOME_CTA.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">{HOME_CTA.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 md:flex-row">
            <button
              type="button"
              onClick={scrollToBookStay}
              className="premium-action w-full rounded-full bg-primary px-8 py-4 font-bold text-on-primary sm:px-10 sm:py-5 md:w-auto md:px-12 md:text-lg"
            >
              {HOME_CTA.cta}
            </button>
            <PhoneLink className="premium-action flex w-full items-center justify-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest px-4 py-4 text-sm font-bold text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container sm:gap-3 sm:px-6 md:w-auto md:px-8 md:py-5">
              <Icon name="call" className="text-secondary" />
              <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
            </PhoneLink>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  )
}
