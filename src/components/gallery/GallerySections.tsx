import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { OptimizedImage } from '@/components/common/OptimizedImage/OptimizedImage'
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { GALLERY_HERO, GALLERY_ITEMS } from '@/constants/content/gallery'

export function GalleryHeroSection() {
  return (
    <section className="mb-section-gap overflow-hidden px-margin-mobile pt-8 sm:pt-16 md:pt-24 md:px-margin-desktop">
      <SectionHeading
        eyebrow={GALLERY_HERO.eyebrow}
        title={GALLERY_HERO.title}
        subtitle={GALLERY_HERO.subtitle}
      />
    </section>
  )
}

export function MasonryGallerySection() {
  return (
    <section className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="masonry-grid mx-auto max-w-7xl gap-gutter space-y-gutter">
        {GALLERY_ITEMS.map((item) => (
          <GlassCard
            key={item.id}
            className="magnetic-card group break-inside-avoid overflow-hidden rounded-xl"
          >
            <OptimizedImage
              src={item.imageSrc}
              alt={item.imageAlt}
              className="h-auto w-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="font-display text-body-lg text-primary">{item.title}</h3>
              <p className="font-body text-body-md text-on-surface-variant">{item.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
