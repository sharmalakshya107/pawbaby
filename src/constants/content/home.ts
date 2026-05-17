import { IMAGES } from '@/constants/assets'
import type { BentoFeature, CareStandard, ReviewCard, StatItem } from '@/types/content'

export const HOME_HERO = {
  badge: 'Home-style boarding',
  title: 'Cozy Dog Boarding',
  titleAccent: 'In a Real Home',
  subtitle:
    'Cozy, cage-free, and loving stay for dogs in a calm home where they feel comfortable, safe, and cared for.',
  primaryCta: 'Contact Now',
  secondaryCta: 'About Us',
} as const

export const HOME_ABOUT = {
  eyebrow: 'About Us',
  paragraphs: [
    'We are pet parents ourselves and understand how difficult it can be to leave your dog with someone else. PawBaby Homestay Jaipur was created to provide a calm, safe, and home-like environment where pets feel comfortable, loved, and cared for, not like they are in a crowded boarding facility.',
    'Our mission is to give pet parents complete peace of mind knowing that their fur babies are cared for in a cozy home where every dog is treated as family.',
    'We offer personal attention, lots of cuddles, and a calm environment because comfort, trust, safety, and emotional care matter most.',
  ],
  highlights: [
    {
      id: 'home-style',
      icon: 'home',
      title: 'Home-style boarding.',
      description: 'Cozy, cage-free, and loving stay for dogs in a real home.',
    },
    {
      id: 'cage-free',
      icon: 'pets',
      title: 'Cage-free stay.',
      description: 'All day free movement and supervised, safe indoor play.',
    },
    {
      id: 'updates',
      icon: 'videocam',
      title: 'Regular updates.',
      description: 'Photo and video updates to keep you connected to your pup.',
    },
  ],
} as const

export const HOME_REVIEWS: ReviewCard[] = [
  {
    id: 'anjali',
    author: 'Anjali R.',
    quote: '"The most premium experience Buddy has ever had. Truly felt like home."',
    avatarSrc: IMAGES.heroOwner,
    avatarAlt: 'Smiling pet owner in warm natural light at PawBaby Homestay',
  },
  {
    id: 'karan',
    author: 'Karan S.',
    subtitle: 'Golden Retriever Parent',
    quote:
      '"Cage-free, loving, and so clean. The photo updates kept us at peace during our trip."',
    avatarSrc: IMAGES.heroDog,
    avatarAlt: 'Happy groomed Golden Retriever in a cozy homestay setting',
  },
]

export const HOME_BENTO: BentoFeature[] = [
  {
    id: 'suites',
    title: 'Home-style Boarding',
    description:
      'No bars, no cages. Just a cozy home setting with calm supervision and personal attention.',
    badge: 'CAGE-FREE STAY',
    imageSrc: IMAGES.bentoLiving,
    imageAlt: 'Happy dogs resting in a cozy home-style boarding room',
    span: 'large',
  },
  {
    id: 'meals',
    title: 'Homemade Meals',
    imageSrc: IMAGES.bentoMeals,
    imageAlt: 'Fresh homemade dog meal prepared according to a dog routine',
    span: 'small',
  },
  {
    id: 'routine',
    title: 'Normal Homestay Routine',
    imageSrc: IMAGES.bentoGarden,
    imageAlt: 'Dogs relaxing comfortably inside a homestay environment',
    span: 'small',
  },
]

export const HOME_STATS: StatItem[] = [
  { id: 'guests', value: 'Every', label: 'Dog Welcome' },
  { id: 'updates', value: 'Daily', label: 'Photo Updates' },
  { id: 'cagefree', value: '100%', label: 'Cage-Free' },
  { id: 'rating', value: 'Home', label: 'Environment' },
]

export const HOME_CARE_STANDARDS: CareStandard[] = [
  {
    id: 'handlers',
    icon: 'verified_user',
    title: 'Personal Attention',
    description:
      'A calm home stay with supervision, cuddles, and care matched to your dog.',
  },
  {
    id: 'updates',
    icon: 'videocam',
    title: 'Photo and Video Updates',
    description:
      'Stay connected with regular updates so you know your pup is safe and happy.',
  },
  {
    id: 'vet',
    icon: 'medical_services',
    title: 'Normal Homestay Routine',
    description:
      'A simple home environment with rest, care, food, and attention according to your dog\'s needs.',
  },
]

export const HOME_CTA = {
  title: 'Need a cozy stay for your pup?',
  subtitle:
    'Call or WhatsApp PawBaby Homestay Jaipur to check availability and share your dog\'s routine.',
  cta: 'Contact Now',
} as const
