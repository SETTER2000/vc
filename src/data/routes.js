import React from 'react'
import Bootstrap from '../components/Bootstrap/Bootstrap';
import News from '../components/News/News';
import About from '../components/About/About';
import SubMenuList from '../components/Workspace/SubMenuList';
import ColorOrganizer from '../components/ColorOrganizer/ColorOrganizer';
import ClockList from '../components/Clock/ClockList';
import Recipes from '../components/Recipes/Recipes';
import BooksFront from '../components/Books/BooksFront';
import MemberList from '../components/Members/MemberList';
import data from './recipes';
import about from './about'
const routes = [
    {
        "name": "Books",
        "subMenu":[
            {"path":"/news",  "component": () =><News/> , "name": "News", "icon":"stats", "title":"Новости компании", "description":"Краткое описание, всплывающая подсказка."},
            {"path":"/color", "component": () =><ColorOrganizer/> , "name": "Color", "icon":"tint", "title":"Органайзер цвета", "description":"Краткое описание, всплывающая подсказка."},
            {"path":"/members",  "component": () =><MemberList count={Math.floor(Math.random() * 2000)}/> , "name": "Members", "icon":"user", "title":"Рецепты еды", "description":"Краткое описание, всплывающая подсказка."},
            {"path":"/about",      "component": () =><About list={about}/> , "name": "About", "icon":"briefcase", "title":"Подбор книг", "description":"Краткое описание, всплывающая подсказка."},
        ],
        "path": "/",
        "icon":"book",
        "exact": true,
        "component": () =><BooksFront/> ,
        "title": () => "Список книг:"
    },
    {
        "name": "Members",
        "path": "/members",
        "icon":"user",
        "exact": true,
        "component": () =><MemberList count={Math.floor(Math.random() * 2000)}/> ,
        "title": () => "Список сотрудников:"
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
        "name": "Clock",
        "path": "/clock",
        "icon":"time",
        "component": () => <ClockList />,
        "title": () => "Таймер:"
    },
    {
        "name": "Bootstrap",
        "path": "/bootstrap",
        "icon":"ok",
        "component": () => <Bootstrap/>,
        "title": () => "Элементы Bootstrap:"
    }
];

export default routes