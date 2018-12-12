import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Menu from './Menu/Menu';
import News from './News/News';
import About from './About/About';
import Home from './Home/Home';
import {Jumbotron, Grid, Row, Col, Image, Button, Breadcrumb} from 'react-bootstrap';
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
        <div style={{display: "flex"}}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}
            >
                <ul style={{
                    listStyleType: "none",
                    fontSize:"2em",
                    padding: 0
                }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                </ul>

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
            </div>

            <div style={{
                flex: 1,
                padding: "10px 0 0 100px",
                textAlign:"left"}}>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>
);

export default AppRouter;