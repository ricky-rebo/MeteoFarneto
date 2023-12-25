import React, { Component } from 'react';


class WebcamImage extends Component<{src: string, interval: number}, {tick: number}> {
    interval: any;
    constructor(props) {
        super(props);

        this.interval = null;
        this.state = {
            tick: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({tick: this.state.tick + 1}), this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <img src={this.props.src} className="img-fluid" />
            </>
        );
    }
}

export default WebcamImage;