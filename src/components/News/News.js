import React from 'react';
import {Link} from 'react-router-dom'

const News = ({Description,  Name, Slug}) =>
    <div className="col-md-3 text-center">
        <Link to="/news">{Slug}</Link>
        <Link to="/news" className="author">{Name}</Link>
        <Link to="/news" className="title" >{Description}</Link>
        {/*<p>{location.city}, {location.state}</p>*/}
    </div>;

export default News
