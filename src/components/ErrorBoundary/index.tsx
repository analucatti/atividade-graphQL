import React from 'react';
import errorGif from '../../assets/error.gif';

type HocProps = {
    // here you can extend hoc with new props
};
type HocState = {
    readonly hasError: string | null | undefined;
};

class ErrorBoundary extends React.Component<HocProps, HocState> {

    readonly state: HocState = {
        hasError: undefined,
    };

    constructor(props) {
        super(props);
        this.state = {hasError: undefined};
    }

    static getDerivedStateFromError(error) {
        console.error(error);
        return {hasError: 'Something went wrong!'};
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        if (hasError) {
            return (
                <div>
                    <h1>{hasError}</h1>
                    <img src={errorGif} alt='Error'/>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;