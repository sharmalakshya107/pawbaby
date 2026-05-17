import { Button } from '@/components/common/Button/Button'

interface ErrorFallbackProps {
  onReset: () => void
}

export function ErrorFallback({ onReset }: ErrorFallbackProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-margin-mobile text-center md:px-margin-desktop">
      <h1 className="font-display text-headline-md text-primary">Something went wrong</h1>
      <p className="max-w-md font-body text-body-md text-on-surface-variant">
        We could not load this page. Please refresh or contact us on WhatsApp if the problem
        persists.
      </p>
      <Button onClick={onReset}>Try again</Button>
    </div>
  )
}
