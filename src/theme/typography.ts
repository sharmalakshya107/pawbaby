/** Matches Stitch tailwind fontFamily + fontSize tokens exactly */
export const fontFamily = {
  'display-lg': ['"Playfair Display"', 'Georgia', 'serif'],
  'headline-lg': ['"Playfair Display"', 'Georgia', 'serif'],
  'headline-lg-mobile': ['"Playfair Display"', 'Georgia', 'serif'],
  'headline-md': ['"Playfair Display"', 'Georgia', 'serif'],
  'label-sm': ['Inter', 'system-ui', 'sans-serif'],
  'body-lg': ['Inter', 'system-ui', 'sans-serif'],
  'body-md': ['Inter', 'system-ui', 'sans-serif'],
} as const

export const fontSize = {
  'display-lg': ['80px', { lineHeight: '90px', letterSpacing: '-0.02em', fontWeight: '700' }],
  'headline-lg': ['48px', { lineHeight: '56px', fontWeight: '600' }],
  'headline-lg-mobile': ['32px', { lineHeight: '40px', fontWeight: '600' }],
  'headline-md': ['32px', { lineHeight: '40px', fontWeight: '500' }],
  'body-lg': ['20px', { lineHeight: '32px', fontWeight: '400' }],
  'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
  'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '600' }],
} as const
