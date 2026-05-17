import type { Config } from 'tailwindcss'
import { colors } from './src/theme/colors'
import { fontFamily, fontSize } from './src/theme/typography'
import { spacing } from './src/theme/spacing'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
    },
  },
} satisfies Config
