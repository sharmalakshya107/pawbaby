import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  EmailLink,
  MapsLink,
  PhoneLink,
  WhatsAppLink,
} from '@/components/common/ContactLink/ContactLink'
import { Icon } from '@/components/common/Icon/Icon'
import { MAIN_NAV_ITEMS } from '@/constants/navigation'
import { CONTACT } from '@/constants/contact'
import { ROUTES, type AppRoute } from '@/constants/routes'
import { useContactActions } from '@/hooks/useContactActions'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { cn } from '@/utils/cn'

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const scrollToSection = useScrollToSection()
  const { scrollToBookStay } = useContactActions()

  const isActive = (path: string, sectionId?: string): boolean => {
    if (location.pathname !== path) return false
    if (sectionId) return location.hash === `#${sectionId}`
    return path === ROUTES.home ? location.pathname === ROUTES.home && !location.hash : true
  }

  const handleNavClick = (path: AppRoute, sectionId?: string) => {
    scrollToSection(path, sectionId)
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    scrollToBookStay()
    setIsMenuOpen(false)
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center px-margin-mobile py-2 sm:px-margin-mobile md:px-margin-desktop md:py-3">
        <div className="w-full max-w-7xl rounded-full border border-outline-variant/30 bg-surface-container/95 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(68,42,34,0.08)] flex items-center justify-between gap-3 px-4 py-2 md:px-8 md:py-3">
          <Link to={ROUTES.home} className="flex min-w-0 shrink items-center gap-2">
            <img
              src="/images/pawbaby-logo.png"
              alt="PawBaby Homestay"
              className="h-10 w-auto max-w-32 object-contain sm:h-12 md:h-16 md:max-w-48"
            />
          </Link>

          <div className="hidden items-center gap-6 md:gap-8 md:flex">
            {MAIN_NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className={cn(
                  'font-body-md text-body-md transition-colors duration-300 ease-out hover:scale-105 hover:text-primary',
                  isActive(item.path, item.sectionId)
                    ? 'border-b-2 border-secondary-container pb-1 font-bold text-primary'
                    : 'text-on-surface-variant',
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <PhoneLink className="premium-action hidden rounded-full border border-outline-variant/40 bg-surface-container-lowest px-4 py-2 font-body-md text-body-md font-bold text-primary hover:bg-secondary-container hover:text-on-secondary-container lg:inline-flex">
              {CONTACT.phoneDisplay}
            </PhoneLink>
            <button
              type="button"
              onClick={handleContactClick}
              className="premium-action rounded-full bg-primary px-6 py-2.5 font-body-md text-body-md font-bold text-on-primary md:px-8 md:py-3"
            >
              Contact Now
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="premium-action flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-all active:scale-95 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="h-10 sm:h-14 md:h-20" />

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={closeMenu}
          role="presentation"
        />
      )}

      {/* Side Drawer Menu */}
      <div 
        className={cn(
          'fixed top-0 left-0 z-50 h-screen w-80 overflow-y-auto bg-surface-container-lowest shadow-[24px_0_80px_-40px_rgba(68,42,34,0.6)] transition-transform duration-300 ease-out md:hidden',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between border-b border-outline-variant/20 px-6 py-4">
            <Link to={ROUTES.home} className="flex items-center gap-2" onClick={closeMenu}>
              <img
                src="/images/pawbaby-logo.png"
                alt="PawBaby Homestay"
                className="h-8 w-auto max-w-24 object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 space-y-1 px-4 py-6">
            {MAIN_NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className={cn(
                  'w-full rounded-lg px-4 py-3 text-left font-body-md text-body-md font-bold transition-all duration-200',
                  isActive(item.path, item.sectionId)
                    ? 'bg-primary/15 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant/20" />

          {/* Contact Section */}
          <div className="space-y-4 px-4 py-6">
            <h3 className="font-body-sm text-body-sm font-bold uppercase text-on-surface-variant/70 tracking-widest">
              Contact Us
            </h3>
            
            {/* Contact Buttons - Horizontal */}
            <div className="grid grid-cols-2 gap-3">
              <PhoneLink className="premium-action flex flex-col items-center justify-center gap-2 rounded-xl bg-primary px-3 py-4 font-body-sm text-body-sm font-bold text-on-primary hover:bg-primary/90 transition-colors">
                <Icon name="call" size={18} />
                <span className="text-xs">Call</span>
              </PhoneLink>
              <WhatsAppLink className="premium-action flex flex-col items-center justify-center gap-2 rounded-xl bg-secondary-container px-3 py-4 font-body-sm text-body-sm font-bold text-on-secondary-container hover:bg-secondary-container/90 transition-colors">
                <Icon name="chat" filled size={18} />
                <span className="text-xs">WhatsApp</span>
              </WhatsAppLink>
              <EmailLink className="premium-action flex flex-col items-center justify-center gap-2 rounded-xl bg-primary px-3 py-4 font-body-sm text-body-sm font-bold text-on-primary hover:bg-primary/90 transition-colors">
                <Icon name="mail" size={18} />
                <span className="text-xs">Email</span>
              </EmailLink>
              <MapsLink className="premium-action flex flex-col items-center justify-center gap-2 rounded-xl bg-primary px-3 py-4 font-body-sm text-body-sm font-bold text-on-primary hover:bg-primary/90 transition-colors">
                <Icon name="distance" size={18} />
                <span className="text-xs">Location</span>
              </MapsLink>
            </div>

            {/* Primary CTA Button */}
            <button
              type="button"
              onClick={handleContactClick}
              className="premium-action w-full rounded-xl bg-secondary-container px-4 py-4 font-body-md text-body-md font-bold text-on-secondary-container hover:bg-secondary-container/90 transition-colors"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
