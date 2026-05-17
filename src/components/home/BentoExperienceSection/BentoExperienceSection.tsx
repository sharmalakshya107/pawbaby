import { OptimizedImage } from '@/components/common/OptimizedImage/OptimizedImage'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { HOME_BENTO } from '@/constants/content/home'

export function BentoExperienceSection() {
  const large = HOME_BENTO.find((item) => item.span === 'large')
  const small = HOME_BENTO.filter((item) => item.span === 'small')

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <SectionHeading
        title="Crafting Joyful Moments"
        subtitle="Where every corner is designed for their comfort and every staff member is a trained pet parent."
        className="mb-8 sm:mb-12 md:mb-16"
      />
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {large ? (
          <Reveal className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] md:col-span-8">
            <OptimizedImage
              src={large.imageSrc}
              alt={large.imageAlt}
              className="h-[400px] w-full transition-transform duration-700 group-hover:scale-110 sm:h-[450px] md:h-[480px]"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-transparent to-transparent p-12">
              {large.badge ? (
                <span className="mb-4 w-fit rounded-full bg-secondary-container px-4 py-1 font-label-sm text-label-sm text-on-secondary-container">
                  {large.badge}
                </span>
              ) : null}
              <h3 className="font-display-lg text-headline-lg text-on-primary">{large.title}</h3>
              {large.description ? (
                <p className="mt-4 max-w-md text-on-primary/80">{large.description}</p>
              ) : null}
            </div>
          </Reveal>
        ) : null}
        <div className="grid grid-rows-2 gap-gutter md:col-span-4">
          {small.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={200 + index * 200}
              className="group relative overflow-hidden rounded-[2.5rem]"
            >
              <OptimizedImage
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full min-h-[280px] w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/20 p-8 transition-colors group-hover:bg-black/40">
                <h3 className="font-display-lg text-headline-md text-white">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
