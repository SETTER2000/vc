import React from 'react';
import {Link} from 'react-router-dom'

const Member = ({email, picture, name, location}) =>
    <div className="col-md-3 text-center">
        <Link to="/members"><img className="img-circle" src={picture.thumbnail} width="80px" alt={name.last.toUpperCase()}/></Link>
        <Link to="/members" className="author">{name.first.toUpperCase()} {name.last.toUpperCase()}</Link>
        <Link to={"mailto:" + email} className="title" >{email}</Link>
        <p>{location.city}, {location.state}</p>
    </div>;

export default Member