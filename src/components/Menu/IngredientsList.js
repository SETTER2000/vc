// Используя компонент Ingredient, можно выстроить компонент IngredientsList,
// который пригодится всякий раз, когда необходимо отобразить список ингредиентов
import React from 'react';
import Ingredient from './Ingredient'

const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>;
export default IngredientsList
