import React, { PropsWithChildren } from 'react';
import { LoggerProvider } from './logger';

/**
 * Higher order component that should be used at the page level to capture
 * or handle uncaught errors made within React.
 *
 * This is a class component, as there is no direct equivalent in
 * functional components yet.
 *
 * Taken from:
 * https://stackoverflow.com/a/70179187/5294333
 */
export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  {
    error?: string;
    errorInfo?: React.ErrorInfo;
  }
> {
  static contextType = LoggerProvider;
  context!: React.ContextType<typeof LoggerProvider>;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error: `${error.name}: ${error.message}`, errorInfo });
  }

  render() {
    const logger = this.context;
    const { error, errorInfo } = this.state;

    logger.error(error, errorInfo);

    if (error) {
      return <div>{error}</div>;
    }
    return <>{this.props.children}</>;
  }
}
