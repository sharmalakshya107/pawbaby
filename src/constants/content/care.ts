import { IMAGES } from '@/constants/assets'
import type { CarePromiseItem, WhyChooseCard } from '@/types/content'

export const CARE_HERO = {
  eyebrow: 'Home-style Care',
  title: 'A Real Home for Your Dog.',
  subtitle:
    'We provide a calm, cage-free environment where every dog is treated like family and cared for according to their routine.',
} as const

export const CARE_FEATURES = [
  {
    id: 'cage-free',
    type: 'image-large' as const,
    icon: 'home',
    title: 'Cage-Free Living',
    description:
      'No bars, no stress. Dogs stay in a real home with space to rest, move, and feel comfortable.',
    imageSrc: IMAGES.careLiving,
    imageAlt: 'PawBaby dog resting comfortably on a bed in a real home',
  },
  {
    id: 'live-updates',
    type: 'card' as const,
    icon: 'videocam',
    title: 'Live Updates',
    description:
      'Stay connected with HD photo and video updates of your pet\'s adventures throughout the day.',
  },
  {
    id: 'social-play',
    type: 'card' as const,
    icon: 'pets',
    title: 'Normal Homestay Routine',
    description:
      'A simple home routine with rest, attention, safe indoor movement, and care based on your dog\'s needs.',
  },
  {
    id: 'personalized',
    type: 'image-medium' as const,
    title: 'Personalized Care',
    description:
      'Every pet has a unique rhythm. We match their diet, medication, and sleep schedule perfectly.',
    imageSrc: IMAGES.carePersonalized,
    imageAlt: 'Golden Retriever receiving gentle care from a trained handler',
  },
]

export const WHY_CHOOSE: WhyChooseCard[] = [
  {
    id: 'safe',
    icon: 'verified_user',
    title: 'Safe Sanctuary',
    description:
      '24/7 onsite supervision by trained professionals. Our home is fully secure and pet-proofed.',
  },
  {
    id: 'meals',
    icon: 'restaurant',
    title: 'Homemade Meals',
    description:
      'Real homemade food or meals according to your dog\'s diet, routine, and needs.',
  },
  {
    id: 'hygiene',
    icon: 'sanitizer',
    title: 'Daily Hygiene',
    description:
      'Regular brushing, paw cleaning, and sanitized bedding every single day for optimal health.',
  },
]

export const CARE_PROMISE: CarePromiseItem[] = [
  {
    id: 'medical',
    icon: 'medical_services',
    title: 'Medical Support',
    description:
      'On-call veterinary partnerships and swift emergency protocols for absolute peace of mind.',
  },
  {
    id: 'pristine',
    icon: 'sanitizer',
    title: 'Pristine Standards',
    description:
      'Hospital-grade air purification and non-toxic cleaning agents keep our sanctuary allergen-free.',
  },
  {
    id: 'enrichment',
    icon: 'favorite',
    title: 'Emotional Enrichment',
    description:
      'More than just care, we provide companionship, puzzles, and sensory play to keep minds sharp.',
  },
]

export const CARE_IMAGE = {
  src: IMAGES.careBulldog,
  alt: 'Happy PawBaby dog sitting comfortably inside the home',
} as const
