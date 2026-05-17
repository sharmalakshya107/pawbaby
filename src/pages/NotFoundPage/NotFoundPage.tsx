import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button/Button'
import { ROUTES } from '@/constants/routes'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-margin-mobile text-center">
      <h1 className="font-display text-headline-lg text-primary">Page not found</h1>
      <p className="max-w-md text-on-surface-variant">
        The page you are looking for does not exist. Return home to explore our homestay.
      </p>
      <Link to={ROUTES.home}>
        <Button>Back to Home</Button>
      </Link>
    </section>
  )
}
