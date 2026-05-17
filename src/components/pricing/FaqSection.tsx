import { useState } from 'react'
import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { Icon } from '@/components/common/Icon/Icon'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { FAQ_ITEMS, FAQ_SECTION } from '@/constants/content/faq'
import { cn } from '@/utils/cn'

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id ?? '')

  return (
    <section className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="mx-auto max-w-3xl space-y-12">
        <SectionHeading title={FAQ_SECTION.title} subtitle={FAQ_SECTION.subtitle} />
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id
            return (
              <GlassCard key={item.id} className="overflow-hidden rounded-2xl border-outline-variant/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-md text-body-lg text-primary">{item.question}</span>
                  <Icon
                    name="expand_more"
                    className={cn('transition-transform duration-300', isOpen && 'rotate-180')}
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-outline-variant/10 px-6 pb-6 pt-4 font-body leading-relaxed text-on-surface-variant">
                    {item.answer}
                  </div>
                ) : null}
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
