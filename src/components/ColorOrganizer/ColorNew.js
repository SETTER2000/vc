import React from 'react';
import {Component} from 'react';
import StarRating from './StarRating'
import Star  from './Star'

export class ColorNew extends Component {
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }
    render() {
        const { title, rating, color, onRate } = this.props;
        return(
        <section className="color" style={this.style}>
            <h1 ref="title">{title}</h1>
            <div className="color"
                 style={{ backgroundColor: color }}>
            </div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </section>)
    }
}

ColorNew.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
};
ColorNew.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f
};

export default ColorNew