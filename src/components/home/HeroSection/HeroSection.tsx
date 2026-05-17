import { useEffect } from 'react'
import { MapsLink } from '@/components/common/ContactLink/ContactLink'
import { GlassCard } from '@/components/common/GlassCard/GlassCard'
import { Icon } from '@/components/common/Icon/Icon'
import { Reveal } from '@/components/common/Reveal/Reveal'
import { HOME_HERO } from '@/constants/content/home'
import { useContactActions } from '@/hooks/useContactActions'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { ROUTES } from '@/constants/routes'

export function HeroSection() {
  const { scrollToBookStay } = useContactActions()
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    const container = document.getElementById('hero-canvas')
    if (!container) return

    for (let i = 0; i < 20; i += 1) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full bg-secondary-fixed-dim/20 blur-xl'
      const size = Math.random() * 100 + 50
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`
      particle.style.animationDelay = `-${Math.random() * 10}s`
      container.appendChild(particle)
    }
  }, [])

  return (
    <section className="relative flex min-h-[auto] flex-col items-center overflow-hidden px-margin-mobile pb-section-gap pt-8 sm:pt-16 md:pt-24 hero-gradient md:min-h-[85vh] md:px-margin-desktop">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        <div id="hero-canvas" className="three-container relative h-full w-full">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[819px] w-[80vw] rounded-[4rem] border border-outline-variant/20 bg-gradient-to-tr from-surface-container/20 to-transparent blur-3xl" />
          </div>
        </div>
      </div>

      {/* Floating Review Cards Container */}
      <div className="pointer-events-none absolute inset-0 z-5">
        {/* Floating Review Card - Left (Desktop only) */}
        <Reveal
          className="absolute bottom-16 left-4 z-10 hidden w-64 md:bottom-20 md:left-8 md:w-72 lg:block"
          delayMs={800}
        >
          <div className="pointer-events-auto">
            <GlassCard className="rounded-3xl border border-outline-variant/30 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAFY-7nSExrDrDHNpStTdNiQRTPb8bdhS0x2iJxw31rKjjv2R_UbXOq6BzRTWU2K3gBAHjE388gsMo5sC0q3O4Xru_9pM0TdWyvL8IHnFQeQ8_z0JPpZttwww5qOYrYfWC7gPAp1e--qR1X4kPSwXCxviyzz3vHGaiL226YUePEuN0qwEMENECX_YLS5ClXMEaTTcFO-JlDvDIQwX4F16s60auN0JS33xMb5HcvWvdd0srgTVF8ppz1LeBAeOVFtY5ysgbpJ8xukk"
                  alt="Anjali R."
                  className="h-12 w-12 rounded-full border-2 border-secondary-fixed object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary">Anjali R.</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        filled
                        size={14}
                        className="text-secondary-fixed-dim"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                "The most premium experience Buddy has ever had. Truly felt like home."
              </p>
            </GlassCard>
          </div>
        </Reveal>

        {/* Floating Review Card - Right (Desktop only) */}
        <Reveal
          className="absolute right-4 top-32 z-10 hidden w-64 md:right-8 md:top-40 md:w-80 lg:block"
          delayMs={1000}
        >
          <div className="pointer-events-auto">
            <GlassCard className="rounded-3xl border border-outline-variant/30 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgM-47pQDJ_WRp7RC1DQRFPqvP9U-93sruafkzy852AuSv0gzxar_T6fiLZ1LBO7cVE_bzhTpjnnfjAhUft9xK_dyGqrOmIMANk2tDn0PfNV_AzYJILd1FYDRdZ4blShZJrZPRLkBM6t8l6u0H63EOoSYeeDvsfHc9fHMpTh_O-HgJKILVNZQLXkIdgUYcJrAp_3HkvC0YV6uSPW-8XW7GBG4ntC-WDd8u3zgNnElu07i98OLR0LhuOJC9JEA1aZ-soKOfGXYo5FE"
                  alt="Karan S."
                  className="h-12 w-12 rounded-full border-2 border-secondary-fixed object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary">Karan S.</h4>
                  <p className="text-xs text-on-surface-variant font-label-sm">
                    Golden Retriever Parent
                  </p>
                </div>
              </div>
              <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                "Cage-free, loving, and so clean. The photo updates kept us at peace during our trip."
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 max-w-5xl space-y-3 text-center sm:space-y-4 md:space-y-8">
        <Reveal>
          <GlassCard className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 px-4 py-2 shadow-sm">
            <div className="flex -space-x-2">
              {[0, 1].map((key) => (
                <span
                  key={key}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-secondary"
                >
                  <Icon name="star" filled size={14} className="text-on-secondary" />
                </span>
              ))}
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              {HOME_HERO.badge}
            </span>
          </GlassCard>
        </Reveal>

        <Reveal delayMs={200}>
          <h1 className="font-display-lg text-[32px] font-bold leading-[38px] text-primary sm:text-[42px] sm:leading-[48px] md:text-display-lg md:leading-[90px]">
            {HOME_HERO.title}
            <br />
            <span className="italic text-secondary">{HOME_HERO.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delayMs={400}>
          <p className="mx-auto max-w-2xl font-body-sm text-body-sm text-on-surface-variant sm:font-body-md sm:text-body-md lg:font-body-lg lg:text-body-lg">
            {HOME_HERO.subtitle}
          </p>
        </Reveal>

        <Reveal delayMs={600}>
          <div className="flex w-full gap-2 pt-2 sm:justify-center sm:gap-6 sm:pt-6">
            <button
              type="button"
              onClick={scrollToBookStay}
              className="premium-action magnetic-effect flex-1 rounded-full bg-primary px-4 py-3 font-body-md text-body-md font-bold text-on-primary sm:flex-none sm:px-10 sm:py-5"
            >
              {HOME_HERO.primaryCta}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(ROUTES.home, 'experience')}
              className="premium-action magnetic-effect glass-card flex-1 rounded-full border border-outline/30 px-4 py-3 font-body-md text-body-md font-bold text-primary hover:bg-surface-variant/40 sm:flex-none sm:px-10 sm:py-5"
            >
              {HOME_HERO.secondaryCta}
            </button>
          </div>
        </Reveal>

        <Reveal delayMs={720}>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 pt-2 sm:gap-3">
            {['Every dog welcome', 'Cage-free home', 'Photo updates'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-outline-variant/40 bg-surface-container-lowest/70 px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant sm:px-4 sm:py-2"
              >
                {item}
              </span>
            ))}
            <MapsLink className="premium-action rounded-full border border-outline-variant/40 bg-surface-container-lowest/70 px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-widest text-primary sm:px-4 sm:py-2">
              View Google listing
            </MapsLink>
          </div>
        </Reveal>

        {/* Mobile Reviews Section */}
        <Reveal delayMs={840} className="lg:hidden">
          <div className="mx-auto mt-8 w-full max-w-md space-y-3 sm:mt-10 sm:space-y-4">
            <GlassCard className="rounded-3xl border border-outline-variant/30 p-4 shadow-xl sm:p-6">
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAFY-7nSExrDrDHNpStTdNiQRTPb8bdhS0x2iJxw31rKjjv2R_UbXOq6BzRTWU2K3gBAHjE388gsMo5sC0q3O4Xru_9pM0TdWyvL8IHnFQeQ8_z0JPpZttwww5qOYrYfWC7gPAp1e--qR1X4kPSwXCxviyzz3vHGaiL226YUePEuN0qwEMENECX_YLS5ClXMEaTTcFO-JlDvDIQwX4F16s60auN0JS33xMb5HcvWvdd0srgTVF8ppz1LeBAeOVFtY5ysgbpJ8xukk"
                  alt="Anjali R."
                  className="h-10 w-10 rounded-full border-2 border-secondary-fixed object-cover sm:h-12 sm:w-12"
                />
                <div>
                  <h4 className="font-bold text-primary">Anjali R.</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        filled
                        size={12}
                        className="text-secondary-fixed-dim sm:text-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                "The most premium experience Buddy has ever had. Truly felt like home."
              </p>
            </GlassCard>

            <GlassCard className="rounded-3xl border border-outline-variant/30 p-4 shadow-xl sm:p-6">
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgM-47pQDJ_WRp7RC1DQRFPqvP9U-93sruafkzy852AuSv0gzxar_T6fiLZ1LBO7cVE_bzhTpjnnfjAhUft9xK_dyGqrOmIMANk2tDn0PfNV_AzYJILd1FYDRdZ4blShZJrZPRLkBM6t8l6u0H63EOoSYeeDvsfHc9fHMpTh_O-HgJKILVNZQLXkIdgUYcJrAp_3HkvC0YV6uSPW-8XW7GBG4ntC-WDd8u3zgNnElu07i98OLR0LhuOJC9JEA1aZ-soKOfGXYo5FE"
                  alt="Karan S."
                  className="h-10 w-10 rounded-full border-2 border-secondary-fixed object-cover sm:h-12 sm:w-12"
                />
                <div>
                  <h4 className="font-bold text-primary">Karan S.</h4>
                  <p className="text-xs text-on-surface-variant font-label-sm">
                    Golden Retriever Parent
                  </p>
                </div>
              </div>
              <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                "Cage-free, loving, and so clean. The photo updates kept us at peace during our trip."
              </p>
            </GlassCard>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
