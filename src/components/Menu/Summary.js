import React from 'react';

const Summary = ({ingredients=0, steps=0, title="[recipe]"}) =>
    <header>
        <h1>{title}</h1>
        <p><strong>{ingredients} Ingredients | {steps} Steps</strong></p>
    </header>;

export default Summary