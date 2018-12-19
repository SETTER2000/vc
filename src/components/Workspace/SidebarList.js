import React from 'react';
import {ListGroup} from 'react-bootstrap'
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';


const SidebarList = ({list = []}) =>

    <ListGroup>
        {list.map((item, i) =>
            <SidebarItem key={i} {...item} />
        )}
    </ListGroup>;

SidebarList.propTypes = {
    list: PropTypes.array
};

export default SidebarList