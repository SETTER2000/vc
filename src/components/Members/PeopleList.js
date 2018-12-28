// import {render} from 'react-dom'
import React from 'react';

import DataComponent from '../DataComponent';

const PeopleList = ({data}) =>
    <ol className="people-list">
        {console.log(data)}
        {data.results.map((person, i) => {
            const {first, last} = person.name;
            return <li key={i}>{first} {last}</li>
        })}
    </ol>;
const RandomMeUsers = DataComponent(
    PeopleList,
    "https://randomuser.me/api/"
);

export default RandomMeUsers;
