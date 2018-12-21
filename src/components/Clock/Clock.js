import React from 'react'
import {getClockTime} from './lib';

const {Component} = React;

class Clock extends Component {
    constructor() {
        super();
        this.state = getClockTime();
    }

    componentDidMount() {
        console.log("Starting Clock");
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 100)
    }

    componentWillUnmount() {
        clearInterval(this.ticking);
        console.log("Stopping Clock")
    }

    render() {
        const {hours, minutes, seconds, milliseconds, timeOfDay} = this.state;
        return (

                <div className="col-md-12 text-center">
                    <h1>Clock</h1>
                    <hr/>
                    <div id="clock" className="clock">
                        <span>{hours}</span>
                        <span>:</span>
                        <span>{minutes}</span>
                        <span>:</span>
                        <span>{seconds}</span>
                        <span>&nbsp;{milliseconds}</span>
                        <span>{timeOfDay}</span>
                    </div>
                    <hr/>
                    <p>
                        <button onClick={this.props.onClose}>Remove</button>
                    </p>
                </div>
        )
    }
}

export default Clock