import React from 'react';
import {Jumbotron, ButtonToolbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/Books.scss'

const Test = () =>
    <Jumbotron>
        <h1>Test</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <ButtonToolbar>
            <Button bsStyle="blue">Blue</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="green">Green</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="yellow">Yellow</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button>Default</Button>
            <Button bsStyle="link">Link</Button>
        </ButtonToolbar><br/>
        <p>
            <Link to="/menu">
            <Button bsStyle="primary">Primary</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
            <Button bsStyle="green">Green</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
            <Button bsStyle="info">Info</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
            <Button bsStyle="success">Success</Button>
            </Link>
        </p>
        <p>
        <Link to="/menu">
            <Button bsStyle="yellow">Yellow</Button>
        </Link>
        </p>
        <p>
            <Link to="/menu">
                <Button bsStyle="warning">Warning</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
                <Button bsStyle="danger">Danger</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
            <Button>Default</Button>
            </Link>
        </p>
        <p>
            <Link to="/menu">
                <Button bsStyle="link">Link</Button>
            </Link>
        </p>
        {/*<AddColorForm onNewColor={(title, color, name) => {*/}
            {/*alert(`New Color: Имя цвета ${title} Цвет ${color} ФИО ${name}`);*/}
            {/*console.log(`TODO: add new ${title} and ${color} and ${name} to the list`);*/}
            {/*console.log(`TODO: render UI with new Color`);*/}
        {/*}}/>*/}

    </Jumbotron>;


export default Test