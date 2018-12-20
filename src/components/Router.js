import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Grid, Row} from 'react-bootstrap';
import NavbarCust from "./NavbarCust/NavbarCust";
import NavbarCustTop from "./NavbarCust/NavbarCustTop";
import Footer from './Footer/Footer';
import SidebarList from './Workspace/SidebarList';
import Main from "./Workspace/Main";
import routes from "../data/routes";
import '../styles/Router.scss'

const AppRouter = () => (
    <Router>
        <div>
            <div className="new-container">
                <NavbarCustTop/>
                <NavbarCust/>
            </div>
            <Grid fluid={true}>
                <Row>
                    <SidebarList list={routes}/>
                    <Main list={routes}/>
                </Row>
            </Grid>
            <Footer/>
        </div>
    </Router>
);

export default AppRouter;