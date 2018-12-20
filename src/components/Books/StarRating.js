import React from 'react';
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({starsSelected = 0, totalStar = 5, onRate = f => f}) =>
    <div className="text-center">
        {[...Array(totalStar)].map((n, i) =>
            <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)}/>
        )}
        <p>{starsSelected} of {totalStar} stars</p>
    </div>;

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
};
export default StarRating