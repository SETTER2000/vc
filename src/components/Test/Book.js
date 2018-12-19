import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import StarRating from './StarRating'

const Book = ({title, description, onRemove = f => f}) =>
    <div className="col-md-3">
        <Thumbnail href="#" alt="171x180" src="/assets/1.jpg">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
            </p>
        </Thumbnail>
        <h1>{title}</h1>
        <div className="description">{description}</div>
        <button onClick={onRemove} className="btn btn-yellow">x</button>
    </div>;

Book.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onRemove: PropTypes.func
};

export default Book