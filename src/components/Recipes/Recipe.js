// Теперь, имея компоненты для ингредиентов и инструкций, мы можем составить
// композицию рецептов, используя эти компоненты
import React from 'react';
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import Summary from "./Summary";

const Recipe = ({name, ingredients, steps}) =>
    <div className="col-md-4" id={name.toLowerCase().replace(/ /g, '-')}>
        <Summary ingredients={ingredients.length} title={name} steps={steps.length}/>
        <IngredientsList list={ingredients}/>
        <Instructions title="Cooking Instructions" steps={steps}/>
    </div>;
export default Recipe