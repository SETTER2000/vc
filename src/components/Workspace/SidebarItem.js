import React from 'react';
import {ListGroupItem, Glyphicon} from 'react-bootstrap';
import {Link} from "react-router-dom";

const SidebarItem = ({name, path, icon}) =>
    <Link to={path}>
        <ListGroupItem className="sidebar-blue">
            <Glyphicon  glyph={icon} /> &nbsp; {name}
        </ListGroupItem>
    </Link>;
export default SidebarItem