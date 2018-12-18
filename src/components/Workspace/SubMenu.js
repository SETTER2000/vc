import React from 'react';
import {Link} from "react-router-dom";

const SubMenu = ({title, subName}) =>
        <ul>
            {subName.map((item, i)=>
                <li key={i} title={item.description}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </li>
            )}
        </ul>;


export default SubMenu