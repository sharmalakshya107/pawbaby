import type { FaqItem } from '@/types/content'

export const FAQ_SECTION = {
  title: 'Your Peace of Mind',
  subtitle: "Everything you need to know about your pet's stay.",
} as const

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'safety',
    question: "How do you ensure my pet's safety?",
    answer:
      'Safety is our priority. We have 24/7 on-site staff, CCTV monitoring in all areas, and a dedicated vet-on-call for any emergencies. All our guests must be up-to-date with vaccinations to ensure a healthy environment for everyone.',
  },
  {
    id: 'cage-free',
    question: 'Is the homestay really cage-free?',
    answer:
      'Yes, absolutely. We believe pets deserve comfort, not confinement. Our guests roam freely in designated safe zones, with plush bedding and open spaces that mimic a loving home environment.',
  },
  {
    id: 'updates',
    question: 'Can I get updates about my pet?',
    answer:
      "Of course! We send daily WhatsApp updates including photos and videos of your pet's activities, meal times, and nap sessions so you can travel with complete peace of mind.",
  },
  {
    id: 'bring',
    question: 'What do I need to bring?',
    answer:
      "We recommend bringing your pet's regular food to avoid stomach upsets, their favorite toy or a t-shirt with your scent to help them settle in, and their vaccination records. We can also support homemade meals or meals according to your dog's needs.",
  },
]
