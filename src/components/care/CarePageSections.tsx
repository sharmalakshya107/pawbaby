import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { Icon } from '@/components/common/Icon/Icon'
import { OptimizedImage } from '@/components/common/OptimizedImage/OptimizedImage'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import {
  CARE_FEATURES,
  CARE_HERO,
  CARE_IMAGE,
  CARE_PROMISE,
  WHY_CHOOSE,
} from '@/constants/content/care'
import { cn } from '@/utils/cn'

export function CareHeroSection() {
  return (
    <section className="relative px-margin-mobile pb-section-gap pt-8 sm:pt-16 md:pt-24 hero-gradient md:px-margin-desktop">
      <SectionHeading
        eyebrow={CARE_HERO.eyebrow}
        title={CARE_HERO.title}
        subtitle={CARE_HERO.subtitle}
        className="mb-8 sm:mb-12 md:mb-16"
      />
      <CareFeaturesGrid />
    </section>
  )
}

function CareFeaturesGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12 md:gap-8">
      {CARE_FEATURES.map((feature) => {
        if (feature.type === 'image-large' && 'imageSrc' in feature) {
          return (
            <div
              key={feature.id}
              className="group relative h-[280px] overflow-hidden rounded-2xl sm:h-[350px] md:h-[380px] md:rounded-3xl md:col-span-8"
            >
              <OptimizedImage
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 text-on-primary">
                <div className="mb-3 sm:mb-4 md:mb-6 flex items-start gap-2 sm:gap-3 md:gap-4">
                  <Icon name={feature.icon} className="mt-1 shrink-0 text-2xl sm:text-3xl md:text-5xl text-secondary-fixed" />
                  <h3 className="font-display-md sm:font-display-lg text-headline-sm sm:text-headline-md md:text-headline-lg leading-tight">{feature.title}</h3>
                </div>
                <p className="max-w-md font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg leading-relaxed opacity-95 line-clamp-2 md:line-clamp-none">{feature.description}</p>
              </div>
            </div>
          )
        }

        if (feature.type === 'image-medium' && 'imageSrc' in feature) {
          return (
            <div
              key={feature.id}
              className="group relative h-[280px] overflow-hidden rounded-2xl sm:h-[350px] md:h-[320px] md:rounded-3xl md:col-span-8"
            >
              <OptimizedImage
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-4 sm:p-8 md:p-12 text-on-primary">
                <h3 className="mb-3 sm:mb-4 md:mb-6 font-display-md sm:font-display-lg text-headline-sm sm:text-headline-md md:text-headline-lg leading-tight">{feature.title}</h3>
                <p className="font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg leading-relaxed opacity-95 line-clamp-3 md:line-clamp-none">{feature.description}</p>
              </div>
            </div>
          )
        }

        return (
          <GlassCard
            key={feature.id}
            className="flex flex-col justify-end rounded-2xl p-4 sm:p-6 md:p-10 md:rounded-3xl md:col-span-4"
          >
            <div
              className={cn(
                'mb-3 sm:mb-4 md:mb-6 flex h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 items-center justify-center rounded-xl sm:rounded-2xl md:rounded-2xl',
                feature.icon === 'pets' ? 'bg-tertiary/10' : 'bg-secondary/10',
              )}
            >
              <Icon
                name={feature.icon}
                className={cn('text-xl sm:text-2xl md:text-3xl', feature.icon === 'pets' ? 'text-tertiary' : 'text-secondary')}
              />
            </div>
            <h3 className="mb-2 sm:mb-3 md:mb-4 font-display-sm sm:font-headline-md md:font-display-lg text-headline-sm md:text-headline-md text-primary">{feature.title}</h3>
            <p className="font-body-xs sm:font-body-sm md:font-body-md text-body-xs sm:text-body-sm md:text-body-md text-on-surface-variant line-clamp-3 md:line-clamp-none">{feature.description}</p>
          </GlassCard>
        )
      })}
    </div>
  )
}

export function WhyChooseSection() {
  return (
    <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
      <SectionHeading title="Why PawBaby?" className="mb-20" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-element-gap md:grid-cols-3">
        {WHY_CHOOSE.map((card) => (
          <GlassCard key={card.id} className="rounded-[40px] p-10 text-center">
            <Icon name={card.icon} className="mb-8 block text-5xl text-secondary" />
            <h4 className="mb-4 font-display text-headline-md text-primary">{card.title}</h4>
            <p className="font-body text-body-md text-on-surface-variant">{card.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

export function CarePromiseSection() {
  return (
    <section className="overflow-hidden px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-8 font-display text-headline-lg text-primary">
            Our Unwavering Care Promise
          </h2>
          <div className="space-y-8">
            {CARE_PROMISE.map((item) => (
              <div key={item.id} className="flex items-start gap-6">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed">
                  <Icon name={item.icon} filled className="text-xl text-on-secondary-fixed" />
                </div>
                <div>
                  <h5 className="mb-2 font-bold text-primary">{item.title}</h5>
                  <p className="font-body text-body-md text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:w-1/2">
          <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-3xl" />
          <GlassCard className="rounded-[3rem] p-4">
            <OptimizedImage
              src={CARE_IMAGE.src}
              alt={CARE_IMAGE.alt}
              className="h-[400px] w-full rounded-[2.5rem] object-cover sm:h-[450px] md:h-[480px]"
            />
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
