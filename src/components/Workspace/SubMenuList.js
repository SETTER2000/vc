import React from 'react';
import SubMenu from './SubMenu'
const SubMenuList = ({list})=>
    <div>
        <p>Всё о компании:</p>
        {list.map((item, i)=>
            <SubMenu key={i} {...item}/>
        )}
    </div>;

export default SubMenuList