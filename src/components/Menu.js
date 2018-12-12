// Компанент Menu
import React from 'react';
import AppRouter from './Router';
import Recipe from './Recipe.js'
import '../styles/style.css'

const Menu = ({recipes}) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        {/*<Button onClick={() => this.setState({ open: !this.state.open })}>*/}
        {/*click*/}
        {/*</Button>*/}
        <AppRouter/>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>;
export default Menu