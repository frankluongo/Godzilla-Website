import React from 'react';
import MoreContentScroll from '../global/MoreContentScroll';

const Hero = ({ bgImage }) => {
  return (
    <section
      className="hero has-background-image"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <article className="hero__content container">
        <h1>
          Godzilla
          <br />
          <small>King of The Monsters</small>
        </h1>
      </article>
      <MoreContentScroll inheritedClasses="hero__more-content-scroll" />
    </section>
  );
};

export default Hero;
