import React from 'react';
import {Navbar,FormGroup,FormControl ,Button , Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import '../../styles/NavbarCustTop.scss'

const NavbarCustTop = () =>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"> <img src={logo} className="App-logo" alt="logo"/> <span className="suite"> Книги </span></Link>
                </Navbar.Brand>

                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>;

export default NavbarCustTop