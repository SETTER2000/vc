import React from 'react'
import Books from '../components/Books/Books';
import News from '../components/News/News';
import About from '../components/About/About';
import SubMenuList from '../components/Workspace/SubMenuList';
import ColorOrganizer from '../components/ColorOrganizer/ColorOrganizer';
import Recipes from '../components/Recipes/Recipes';
import data from './recipes';
import about from './about'
const routes = [
    {
        "path": "/",
        "exact": true,
        "component": () => <Books/>,
        "title": () => "Список книг:"
    },
    {
        "path": "/news",
        "component": () => <News/>,
        "title": () => "Новости компании:"
    },
    {
        "path": "/about",
        "component": () => <About list={about}/>,
        "title": () => <SubMenuList list={about}/>
    },
    {
        "path": "/menu",
        "component": () =>  <Recipes recipes={data}/>,
        "title": () =>"Меню:"
    },
    {
        "path": "/color",
        "component": () => <ColorOrganizer/>,
        "title": () => "Органайзер цветов:"
    }
];

export default routes