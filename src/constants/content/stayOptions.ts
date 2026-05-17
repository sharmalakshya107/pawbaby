export type StayOptionId = 'day-care' | 'overnight' | 'long-stay'

export type ContactChannel = 'whatsapp' | 'phone' | 'email'

export const STAY_SECTION = {
  title: 'Contact PawBaby',
  subtitle: 'Tell us about your pup and dates. You can call, WhatsApp, or email directly.',
  contactTitle: 'Contact Now',
  contactHint: 'No package selection needed. Reach us directly and we will guide you.',
} as const

export const STAY_CONTACT_MESSAGES: Record<
  StayOptionId,
  { whatsapp: string; emailSubject: string; emailBody: string }
> = {
  'day-care': {
    whatsapp:
      'Hi PawBaby! I would like to know about home-style boarding for my dog. Please share availability.',
    emailSubject: 'Home-style boarding enquiry - PawBaby Homestay',
    emailBody:
      'Hello PawBaby team,\n\nI would like to know about home-style boarding for my dog. Please share availability and requirements.\n\nThank you!',
  },
  overnight: {
    whatsapp:
      'Hi PawBaby! I would like to know about cage-free boarding for my dog. Please share availability.',
    emailSubject: 'Cage-free stay enquiry - PawBaby Homestay',
    emailBody:
      'Hello PawBaby team,\n\nI would like to know about cage-free boarding for my dog. Please share available dates and details.\n\nThank you!',
  },
  'long-stay': {
    whatsapp:
      'Hi PawBaby! I would like to know about dog boarding with regular photo and video updates. Please get in touch.',
    emailSubject: 'Dog boarding enquiry - PawBaby Homestay',
    emailBody:
      'Hello PawBaby team,\n\nI would like to know about dog boarding with regular photo and video updates. Please share details.\n\nThank you!',
  },
}
