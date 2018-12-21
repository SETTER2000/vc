import React from 'react';
import Clock from './Clock';
import {unmountComponentAtNode} from "react-dom";
import '../../styles/Clock.scss'
const target = document.getElementById('root');


const ClockList = () => <Clock onClose={() => unmountComponentAtNode(target) }/>;

export default ClockList