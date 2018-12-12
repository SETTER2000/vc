// Компанент Index
import React from 'react';
import Recipe from './Recipe.js';
import '../../styles/style.css';

const Menu = ({recipes}) =>
    <article >
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        {/*<Button onClick={() => this.setState({ open: !this.state.open })}>*/}
        {/*click*/}
        {/*</Button>*/}
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>;
export default Menu