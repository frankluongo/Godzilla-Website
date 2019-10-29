import React from 'react';

const Navigation = ({ inheritedClasses }) => {
  return (
    <ul className={`website-navigation ${inheritedClasses}`}>
      <li>
        <a href="#">Monster News</a>
      </li>
      <li>
        <a href="#">About Godzilla</a>
      </li>
      <li>
        <a href="#">Filmography</a>
      </li>
      <li>
        <a href="#">Monsterpedia</a>
      </li>
      <li>
        <a href="#">Videos & Trailers</a>
      </li>
      <li>
        <a href="#">Products & Events</a>
      </li>
    </ul>
  );
};

export default Navigation;
