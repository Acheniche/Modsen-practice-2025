import { TEXT } from '@constants/text';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`${TEXT.ERROR_NAME}`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>{TEXT.ERROR}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
