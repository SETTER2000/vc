import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from '../../logo.svg';
import './NavbarCust.css'

const NavbarCust = () =>

        <Navbar collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    {/*  <div className="App">
                        <header className="App-header">

                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                        </header>
                    </div>*/}
                    <Link to="/"> <img src={logo} className="App-logo" alt="logo"/> </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/"> Книги </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                {/* <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>*/}

                <Nav >
                    <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/menu" to="/menu">
                        Menu
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/news" to="/news">
                        News
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>;

export default NavbarCust