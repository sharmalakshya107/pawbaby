import { Icon } from '@/components/common/Icon/Icon'
import {
  EmailLink,
  MapsLink,
  PhoneLink,
  WhatsAppLink,
} from '@/components/common/ContactLink/ContactLink'
import { CONTACT } from '@/constants/contact'

const footerLinks = [
  { label: 'About Us', href: '#experience' },
  { label: 'Contact Us', href: '#book-stay' },
]

export function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-6 bg-primary px-margin-mobile py-12 font-body-md text-body-md text-on-primary sm:gap-8 md:gap-element-gap md:grid-cols-3 md:px-margin-desktop md:py-20">
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3">
          <img
            src="/images/pawbaby-logo.png"
            alt="PawBaby Homestay"
            className="h-14 w-auto max-w-48 object-contain sm:h-16 md:h-20 md:max-w-64"
          />
        </div>
        <p className="max-w-xs text-sm text-on-primary-container sm:text-body-md">
          Cozy, cage-free, and loving home-style boarding for dogs in Jaipur.
        </p>
      </section>

      <section className="flex flex-col gap-3 sm:gap-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-fixed sm:text-sm">
          Navigation
        </h4>
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-on-primary-container transition-colors hover:text-secondary-container sm:text-body-md"
          >
            {link.label}
          </a>
        ))}
      </section>

      <section className="space-y-3 sm:space-y-5">
        <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-fixed sm:text-sm">
          Our Location
        </h4>
        <p className="text-sm text-on-primary-container sm:text-body-md">
          {CONTACT.address.line1}, {CONTACT.address.line2}
          <br />
          {CONTACT.address.country} - {CONTACT.address.postalCode}
        </p>
        <MapsLink className="inline-flex items-center gap-2 text-sm font-bold text-secondary-fixed hover:text-secondary-container sm:text-body-md">
          <Icon name="distance" className="text-sm" />
          Open location in Maps
        </MapsLink>
        <p className="text-sm sm:text-body-md">
          <PhoneLink className="font-bold text-secondary-fixed hover:text-secondary-container">
            {CONTACT.phoneDisplay}
          </PhoneLink>
        </p>
        <div className="flex gap-3 sm:gap-4">
          <WhatsAppLink className="flex h-9 w-9 items-center justify-center rounded-full bg-on-primary-fixed-variant transition-all hover:bg-secondary-container sm:h-10 sm:w-10">
            <Icon name="chat" className="text-sm text-on-primary" />
          </WhatsAppLink>
          <EmailLink className="flex h-9 w-9 items-center justify-center rounded-full bg-on-primary-fixed-variant transition-all hover:bg-secondary-container sm:h-10 sm:w-10">
            <Icon name="mail" className="text-sm text-on-primary" />
          </EmailLink>
        </div>
      </section>

      <p className="border-t border-on-primary-container/20 pt-6 text-xs text-on-primary-container sm:pt-8 sm:text-sm md:col-span-3 md:pt-20">
        © 2026 {CONTACT.businessName}. Registered home-style boarding for your furry family.
      </p>
    </footer>
  )
}
