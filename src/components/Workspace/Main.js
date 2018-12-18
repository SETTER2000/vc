import React from 'react'
import {Route} from 'react-router-dom'
import {Col} from 'react-bootstrap'

const Main = ({list}) =>
    <Col md={10}>
        {list.map((route, i) =>
            <Route  key={i} {...route}/>
        )}
    </Col>;


export default Main