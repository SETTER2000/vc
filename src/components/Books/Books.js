import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Books = () =>
    <Jumbotron>
        <h1>Books</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Link to="/menu">
            <Button bsStyle="primary">Menu</Button>
            </Link>
        </p>
    </Jumbotron>;


export default Books