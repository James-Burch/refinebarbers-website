'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    // You could send this to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold">Something went wrong</h2>
              <p className="mb-6 text-gray-300">
                We apologize for the inconvenience.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
              >
                Try Again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
