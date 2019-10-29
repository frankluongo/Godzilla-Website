import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Logo from '../../icons/Logo';

const MenuHamburger = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    transform: `translate3d(${on ? '0' : '100%'}, 0, 0)`,
  });

  const toggleHamburger = () => {
    toggle(!on);
  };

  return (
    <>
      <button
        className="menu-hamburger__toggle"
        onClick={toggleHamburger.bind(this)}
      >
        Menu
        <Logo />
      </button>
      <animated.div className="menu-hamburger" style={animation}>
        <div className="menu-hamburger__header">
          Hamburger menu
          <button
            aria-label="Close Menu"
            className="menu-hamburger__close"
            onClick={toggleHamburger.bind(this)}
          >
            x
          </button>
        </div>
      </animated.div>
    </>
  );
};

export default MenuHamburger;
