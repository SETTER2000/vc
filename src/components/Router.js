import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Grid, Row, Col} from 'react-bootstrap';
import NavbarCust from "./NavbarCust/NavbarCust";
import Footer from './Footer/Footer';
import SidebarList from './Workspace/SidebarList';
import Main from "./Workspace/Main";


import sidebar from "../data/sidebar";
import routes from "../data/routes";

import '../styles/Router.scss'
import SidebarAncillary from "./Workspace/SidebarAncillary";

const AppRouter = () => (
    <Router>
        <div>
            <NavbarCust/>
            <Grid fluid={true}>
                <Row>
                    <Col md={2} className="sidebar-left">
                        <SidebarList list={sidebar}/>
                        <SidebarAncillary list={routes}/>

                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Col>



                    <Main list={routes}/>
                </Row>
            </Grid>
            <Footer/>
        </div>
    </Router>
);

export default AppRouter;