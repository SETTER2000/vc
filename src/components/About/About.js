import React from 'react';

const About = ({list}) =>
    <div>
        <h1>About</h1>
        {list.map((article, i) =>
            <div key={i}>
                <h2>{article.title}</h2>
               {article.text}
            </div>
        )}
    </div>;

export default About