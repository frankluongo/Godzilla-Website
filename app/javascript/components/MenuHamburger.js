import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

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
        <div className="menu-hamburger-toggle__bars">
          <span className="menu-hamburger-toggle__bar row-1" />
          <span className="menu-hamburger-toggle__bar row-2" />
          <span className="menu-hamburger-toggle__bar row-3" />
        </div>
        Menu
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
