"use client";
import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Builder.io Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-300 bg-red-50 rounded">
          <h2 className="text-red-700 font-bold">Something went wrong with Builder.io</h2>
          <p className="text-red-600">Try refreshing the page or check console for errors.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
