import React from 'react';
import {Link} from "react-router-dom";
import {NavItem} from 'react-bootstrap';

const Menu = ({path, name}) =>
            <NavItem  componentClass={Link} href={path} to={path}>
                {name}
            </NavItem>;

export default Menu