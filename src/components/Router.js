import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Jumbotron, Grid, Row, Col, Image, Button, Breadcrumb} from 'react-bootstrap';
const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: "/bubblegum",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
];
// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;
// const Topic = ({match}) => <h3>Requested Param: {match.params.id}</h3>;
// const Docs = () => <h2>Docs</h2>;
// const Topics = ({match}) => (
//     <div>
//         <h2>Topics</h2>
//
//         <ul>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.path}/:id`} component={Topic}/>
//         <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
const AppRouter = () => (
    <Router>
        <div style={{ display: "flex" }}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}
            >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/bubblegum">Bubblegum</Link>
                    </li>
                    <li>
                        <Link to="/shoelaces">Shoelaces</Link>
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

            <div style={{ flex: 1, padding: "10px" }}>
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
  /*  {/!*<Router>*!/}
        {/!*<div>*!/}
            {/!*<Breadcrumb>*!/}
                {/!*<li><Route exact path="/" component={Home}/></li>*!/}
                {/!*<li><Route path="/about" component={About}/></li>*!/}
                {/!*<li><Route path="/topics" component={Topics}/></li>*!/}
            {/!*</Breadcrumb>*!/}

            {/!*<Route path="/" exact component={Home}/>*!/}
            {/!*<Route path="/about/" component={About}/>*!/}
            {/!*<Route path="/users/" component={Users}/>*!/}
            {/!*<Route path="/docs/" component={Docs}/>*!/}
        {/!*</div>*!/}
    {/!*</Router>*!/}*/
);

export default AppRouter;