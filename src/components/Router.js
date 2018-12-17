import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavbarCust from "./NavbarCust/NavbarCust";
import Menu from './Menu/Menu';
import News from './News/News';
import About from './About/About';
import Footer from './Footer/Footer';
import Books from './Books/Books';
import ColorOrganizer from './color-organizer/ColorOrganizer';
import {ListGroup, ListGroupItem, Grid, Row, Col} from 'react-bootstrap';
import data from "../data/recipes";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div> </div>,
        main: () => <Books/>
    },
    {
        path: "/news",
        sidebar: () => <div>news!</div>,
        main: () => <News/>
    },
    {
        path: "/about",
        sidebar: () => <div>about!</div>,
        main: () => <About/>
    },
    {
        path: "/menu",
        sidebar: () => <div>menu!</div>,
        main: () => <Menu recipes={data}/>
    },
    {
        path: "/color",
        sidebar: () => <div>color!</div>,
        main: () => <ColorOrganizer />
    }
];

const AppRouter = () => (
    <Router>
        <div>
            <NavbarCust/>
            <Grid fluid={true}>
                <Row >
                    <Col md={2} className="sidebar-left">
                        <ListGroup>
                            <Link to="/">
                                <ListGroupItem>
                                    Books
                                </ListGroupItem>
                            </Link>
                            <Link to="/menu">
                                <ListGroupItem>
                                    Menu
                                </ListGroupItem>
                            </Link>
                            <Link to="/about">
                                <ListGroupItem>
                                    About
                                </ListGroupItem>
                            </Link>
                            <Link to="/news">
                                <ListGroupItem>
                                    News
                                </ListGroupItem>
                            </Link>
                            <Link to="/color">
                                <ListGroupItem>
                                    Color
                                </ListGroupItem>
                            </Link>
                            {/*{routes.map((route, index) => (
                                // You can render a <Route> in as many places
                                // as you want in your app. It will render along
                                // with any other <Route>s that also match the URL.
                                // So, a sidebar or breadcrumbs or anything else
                                // that requires you to render multiple things
                                // in multiple places at the same URL is nothing
                                // more than multiple <Route>s.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.sidebar}
                                />
                            ))}*/}
                        </ListGroup>
                    </Col>
                    <Col md={10}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;