import React from 'react'
import Test from '../components/Test/Test';
import News from '../components/News/News';
import About from '../components/About/About';
import SubMenuList from '../components/Workspace/SubMenuList';
import ColorOrganizer from '../components/ColorOrganizer/ColorOrganizer';
import Recipes from '../components/Recipes/Recipes';
import BooksFront from '../components/Books/BooksFront';
import data from './recipes';
import about from './about'
const routes = [
    {
        "name": "Books",
        "path": "/",
        "icon":"book",
        "exact": true,
        "component": () =><BooksFront/> ,
        "title": () => "Список книг:"
    },
    {
        "name": "News",
        "path": "/news",
        "icon":"stats",
        "component": () => <News/>,
        "title": () => "Новости компании:"
    },
    {
        "name": "About",
        "path": "/about",
        "icon":"briefcase",
        "component": () => <About list={about}/>,
        "title": () => <SubMenuList list={about}/>
    },
    {
        "name": "Menu",
        "path": "/menu",
        "icon":"leaf",
        "component": () =>  <Recipes recipes={data}/>,
        "title": () =>"Меню:"
    },
    {
        "name": "Color",
        "path": "/color",
        "icon":"tint",
        "component": () => <ColorOrganizer/>,
        "title": () => "Органайзер цветов:"
    },
    {
        "name": "Test",
        "path": "/test",
        "icon":"ok",
        "component": () => <Test/>,
        "title": () => "Органайзер цветов:"
    }
];

export default routes