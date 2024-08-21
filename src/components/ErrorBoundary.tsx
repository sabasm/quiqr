import React, { Component, ErrorInfo, ReactNode } from 'react';
import LoggerService from '../services/LoggerService';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private logger: LoggerService;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.logger = new LoggerService();
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.logger.error('Error caught by ErrorBoundary:', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}


