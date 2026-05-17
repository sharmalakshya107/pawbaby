import { SelectStaySection } from "@/components/booking/SelectStaySection/SelectStaySection";
import { CtaSection } from "@/components/home/CtaSection/CtaSection";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { Icon } from "@/components/common/Icon/Icon";
import { Reveal } from "@/components/common/Reveal/Reveal";
import { HOME_ABOUT } from "@/constants/content/home";

function AboutUsSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <Reveal className="rounded-2xl bg-surface-container-low px-4 py-8 text-center shadow-[0_18px_60px_-48px_rgba(68,42,34,0.35)] sm:rounded-3xl sm:px-8 sm:py-12 md:rounded-[2rem] md:px-16 md:py-16">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
          {HOME_ABOUT.eyebrow}
        </span>
        <div className="mx-auto mt-6 max-w-4xl space-y-4 font-body-md text-body-md text-on-surface-variant sm:mt-8 sm:space-y-6 md:text-body-lg">
          {HOME_ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:gap-3 md:mt-8 md:grid-cols-3 md:gap-element-gap">
        {HOME_ABOUT.highlights.map((item, index) => (
          <Reveal key={item.id} delayMs={index * 120}>
            <article className="premium-card group h-full rounded-xl sm:rounded-2xl md:rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 sm:p-6 md:p-8">
              <div className="mb-3 sm:mb-4 md:mb-6 flex h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 items-center justify-center rounded-lg sm:rounded-lg md:rounded-2xl bg-secondary-fixed/45 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                <Icon name={item.icon} className="text-lg sm:text-2xl md:text-3xl text-secondary" />
              </div>
              <h3 className="font-headline-sm sm:font-headline-md md:font-headline-md text-headline-sm md:text-headline-md text-primary">{item.title}</h3>
              <p className="mt-2 sm:mt-3 md:mt-4 font-body-xs sm:font-body-sm md:font-body-md text-body-xs sm:text-body-sm md:text-body-md text-on-surface-variant line-clamp-3 md:line-clamp-none">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <SelectStaySection />
      <CtaSection />
    </>
  );
}
