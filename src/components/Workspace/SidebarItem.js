import React from 'react';
import {ListGroupItem, Glyphicon} from 'react-bootstrap';
import {Link} from "react-router-dom";

const SidebarItem = ({name, path, icon}) =>
    <Link to={path}>
        <ListGroupItem className="sidebar-blue">
            <Glyphicon glyph={icon}/> &nbsp; {(name.length < 6) ? name : `${name.slice(0,4)}...`}
        </ListGroupItem>
    </Link>;
export default SidebarItem