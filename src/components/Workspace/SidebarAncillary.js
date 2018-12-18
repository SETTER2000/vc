import React from 'react';
import {Route} from "react-router-dom";
import SubMenuList from './SubMenuList'
import about from "../../data/about";


const SidebarAncillary = ({list}) =>
    <div>
        {list.map((route, i) => (
            <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component= {route.title}
            />
        ))}
    </div>;

export default SidebarAncillary