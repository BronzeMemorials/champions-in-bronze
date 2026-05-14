import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Global Error Boundary — catches any render error including React #426
 * (suspended components that throw, lazy load failures, etc.)
 * Prevents the app from going fully blank on tab/route transitions.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log for debugging — silent in production
    console.warn("[ErrorBoundary caught]", error?.message, info?.componentStack?.slice(0, 200));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="text-center max-w-md">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Something went wrong</h2>
            <p className="text-gray-500 text-sm mb-8">
              This page encountered an error. Try refreshing or go back to the home page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-sans text-xs uppercase tracking-widest transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}