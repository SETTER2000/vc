import React from 'react';
import {ListGroup, Col} from 'react-bootstrap'
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';
import SidebarAncillary from "./SidebarAncillary";


const SidebarList = ({list = []}) =>
    <Col md={1} mdOffset={1} className="sidebar-left">
        <ListGroup>
            {list.map((item, i) =>
                <SidebarItem key={i} {...item} />
            )}
        </ListGroup>
        <SidebarAncillary list={list}/>
    </Col>;

SidebarList.propTypes = {
    list: PropTypes.array
};

export default SidebarList