import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AddColorForm from "../AddColorForm/AddColorForm";

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
        <AddColorForm onNewColor={(title, color, name) => {
            alert(`New Color: Имя цвета ${title} Цвет ${color} ФИО ${name}`);
            console.log(`TODO: add new ${title} and ${color} and ${name} to the list`);
            console.log(`TODO: render UI with new Color`);
        }}/>

    </Jumbotron>;


export default Books