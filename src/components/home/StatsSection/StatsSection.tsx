import { Reveal } from '@/components/common/Reveal/Reveal'
import { HOME_STATS } from '@/constants/content/home'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-16 md:py-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-4 px-margin-mobile sm:gap-6 md:grid-cols-4 md:gap-gutter md:px-margin-desktop">
        {HOME_STATS.map((stat, index) => (
          <Reveal key={stat.id} delayMs={index * 100} className="text-center">
            <div className="mb-2 font-display text-headline-lg text-secondary-fixed-dim">
              {stat.value}
            </div>
            <div className="font-body text-label-sm uppercase tracking-widest text-on-primary/60">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
