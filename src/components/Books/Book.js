import React from 'react';
import PropTypes from 'prop-types';
import StarRating from "./StarRating";
import {Link,Route} from "react-router-dom";

const Book = ({id, title, author,rating=0,onRate=f=>f, onRemove = f => f}) =>
    <div className="col-md-2 col-sm-6 center-block book">
        <Link to="/book"><img src="/assets/1.jpg" className="img-responsive" alt="book"/></Link>
        <Link className="author" to="/author">{author}</Link>
        <Link className="title" to={title}>{title}</Link>
        <StarRating starsSelected={rating}  onRate={onRate}/>
        <button onClick={onRemove} className="btn btn-yellow">Удалить</button>
        <hr/>
    </div>;

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

export default Book