import React, { Component } from 'react';

class WebcamImage extends Component {
    constructor() {
        super();

        this.interval = null;
        this.state = {
            tick: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({tick: this.state.tick + 1}), 180000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <img src="https://www.rebottini.it/webcam/webcamimage.jpg" className="img-fluid" />
            </>
        );
    }
}

export default WebcamImage;