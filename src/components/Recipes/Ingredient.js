// Для представления отдельно взятого ингредиента можно создать функциональный компонент, не имеющий состояния
import React from 'react';
const Ingredient = ({ amount, measurement, name }) =>
    <li>
        <span className="amount">{amount}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>;
export default Ingredient