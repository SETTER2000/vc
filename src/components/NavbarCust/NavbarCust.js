import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import '../../styles/NavbarCust.scss'

const NavbarCust = () =>

        <Navbar collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"> <img src={logo} className="App-logo" alt="logo"/> </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/"> Книги </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav >
                    <NavItem  eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/menu" to="/menu">
                        Menu
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/news" to="/news">
                        News
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} componentClass={Link} href="/about" to="/about" >About</MenuItem>
                        <MenuItem eventKey={3.2} componentClass={Link} href="/news" to="/news">News</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3} componentClass={Link} href="/menu" to="/menu">Menu</MenuItem>
                        <MenuItem eventKey={3.4} componentClass={Link} href="/color" to="/color">Color</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;

export default NavbarCust