import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Menu from './Menu/Menu';
import News from './News/News';
import About from './About/About';
import Home from './Home/Home';
import {ListGroup, ListGroupItem, Grid, Row, Col, Image, Button, Breadcrumb} from 'react-bootstrap';
import data from "../data/recipes";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <Home/>
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
    }
];

const AppRouter = () => (
    <Router>
        <Grid fluid={true}>
            <Row>
                <Col md={2}>
                    <ListGroup>
                        <Link to="/">
                            <ListGroupItem>
                                Home
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
                        {routes.map((route, index) => (
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
                        ))}
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
    </Router>
);

export default AppRouter;