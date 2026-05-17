import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ErrorFallback } from '@/components/common/ErrorBoundary/ErrorFallback'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Application error:', error, info.componentStack)
  }

  handleReset = (): void => {
    this.setState({ hasError: false })
    window.location.href = '/'
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />
    }
    return this.props.children
  }
}
