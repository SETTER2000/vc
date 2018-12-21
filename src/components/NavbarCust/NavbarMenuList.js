import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Menu from './Menu'
import PropTypes from 'prop-types';
import '../../styles/NavbarMenu.scss'

const NavbarMenuList = ({list = []}) =>

    <Navbar collapseOnSelect fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/"> </Link>
            </Navbar.Brand>

            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {list.map((item, i) =>
                    <Menu key={i} {...item} />
                )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

NavbarMenuList.propTypes = {
    list: PropTypes.array
};
export default NavbarMenuList