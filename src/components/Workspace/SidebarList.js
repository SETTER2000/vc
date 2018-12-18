import React from 'react';
import {ListGroup} from 'react-bootstrap'
import SidebarItem from './SidebarItem';



const SidebarList = ({list}) =>

        <ListGroup>
            {list.map((item, i) =>
                    <SidebarItem key={i} {...item} />
            )}
        </ListGroup>;


export default SidebarList