// Компанент Index
import React from 'react';
import Recipe from './Recipe.js';


const Recipes = ({recipes}) =>
    <div >
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </div>;
export default Recipes