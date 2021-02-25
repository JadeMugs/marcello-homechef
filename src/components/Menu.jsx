import React from 'react';
import { get } from '../utils/connection';

export default function Menu() {
  const [menuList, setMenuList] = React.useState([]);

  React.useEffect(() => {
    get('/menu').then((response) => setMenuList(response));
  }, []);

  return (
    <div className='menu-page'>
      <div>
        <h1>I menu</h1>
        <div className='menu-list'>
          {menuList?.map((menu, idx) => (
            <div className={idx % 2 === 0 ? 'menu' : 'menu-right'} key={idx}>
              <img src={menu.img} alt='' />
              <h2>{menu.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
