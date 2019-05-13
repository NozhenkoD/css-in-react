import React from 'react';
import PAGES from '../constants/pages';

const NavigationItem = ({ item, active, onClick }) => (
  <li onClick={onClick} className={active ? 'active' : ''}>{item}</li>
);

export const Navigation = ({ active, handleClick }) => {
  return (
    <ul className="navigation">
      {Object.keys(PAGES).map(item => {
        const { title } = PAGES[item];
        return (
          <NavigationItem
            item={title}
            active={active === item}
            onClick={() => handleClick(item)}
          />
        );
      })}
    </ul>
  );
};
