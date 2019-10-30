import React from 'react';
import MenuHamburger from '../global/MenuHamburger';
import Navigation from '../global/Navigation';

const Header = () => {
  return (
    <header className="gz-header">
      <MenuHamburger>
        <Navigation inheritedClasses="hamburger-nav" />
      </MenuHamburger>
    </header>
  );
};

export default Header;
