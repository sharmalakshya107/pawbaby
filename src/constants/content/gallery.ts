import { IMAGES } from '@/constants/assets'
import type { GalleryItem } from '@/types/content'

export const GALLERY_HERO = {
  eyebrow: 'A Glimpse Into Home',
  title: 'PawBaby Gallery',
  subtitle:
    'A look at cozy stays, calm care, rest time, and everyday homestay moments for your furry family.',
} as const

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'play',
    title: 'Cage-free Comfort',
    description: 'Free movement and relaxed indoor time in a real home.',
    imageSrc: IMAGES.galleryPlay,
    imageAlt: 'Golden Retriever playing on a lush lawn at sunset',
  },
  {
    id: 'rest',
    title: 'Cozy Rest',
    description: 'Quiet corners for restorative afternoon naps.',
    imageSrc: IMAGES.galleryRest,
    imageAlt: 'Dog resting comfortably in a cozy homestay space',
  },
  {
    id: 'care',
    title: 'Personalized Care',
    description: 'Every guest receives individual attention and warmth.',
    imageSrc: IMAGES.galleryBeagle,
    imageAlt: 'Beagle in a minimalist modern homestay interior',
  },
  {
    id: 'routine',
    title: 'Homestay Routine',
    description: 'Normal home-style care with attention, rest, and comfort.',
    imageSrc: IMAGES.gallerySocial,
    imageAlt: 'Dogs interacting safely in a bright indoor play area',
  },
  {
    id: 'hygiene',
    title: 'Hygiene & Love',
    description: 'Daily checks and grooming rituals for every pet.',
    imageSrc: IMAGES.galleryHygiene,
    imageAlt: 'Caretaker gently brushing a Labrador Retriever',
  },
  {
    id: 'evening',
    title: 'Tranquil Evenings',
    description: 'Peaceful nights in a secure, homelike environment.',
    imageSrc: IMAGES.gallerySunset,
    imageAlt: 'Dog watching sunset through a large window',
  },
]
