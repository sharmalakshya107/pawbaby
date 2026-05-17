import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { Icon } from '@/components/common/Icon/Icon'
import { OptimizedImage } from '@/components/common/OptimizedImage/OptimizedImage'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { HOME_CARE_STANDARDS } from '@/constants/content/home'
import { IMAGES } from '@/constants/assets'

export function CareStandardsSection() {
  return (
    <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mx-auto grid max-w-7xl items-center gap-24 md:grid-cols-2">
        <Reveal className="space-y-12">
          <h2 className="font-display text-headline-lg text-primary">
            Uncompromising Safety
            <br />
            Standards
          </h2>
          <ul className="space-y-8">
            {HOME_CARE_STANDARDS.map((item) => (
              <li key={item.id} className="group flex items-start gap-6">
                <div className="rounded-2xl bg-secondary-fixed p-4 transition-transform group-hover:rotate-6">
                  <Icon name={item.icon} className="text-on-secondary-fixed" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-primary">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={200} className="relative">
          <div className="aspect-square overflow-hidden rounded-[3rem] shadow-2xl">
            <OptimizedImage
              src={IMAGES.careHandler}
              alt="Pet handler gently caring for a dog in a bright modern studio"
              className="h-full w-full"
            />
          </div>
          <GlassCard className="absolute -bottom-10 -left-10 hidden max-w-sm rounded-[2.5rem] p-10 shadow-2xl lg:block">
            <p className="mb-2 font-display text-headline-md italic text-primary">
              &ldquo;Like family.&rdquo;
            </p>
            <p className="text-on-surface-variant">
              That&apos;s the promise we make to every pet that walks through our doors.
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
