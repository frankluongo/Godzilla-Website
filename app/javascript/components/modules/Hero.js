import React from 'react';
import MoreContentScroll from '../global/MoreContentScroll';
import Navigation from '../global/Navigation';

const Hero = ({ bgImage }) => {
  return (
    <section
      className="hero has-background-image"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <article className="hero__content container">
        <div className="hero-content__inner">
          <h1>
            Godzilla
            <small>King of The Monsters</small>
          </h1>
          <Navigation inheritedClasses="hero-navigation" />
        </div>
      </article>
      <MoreContentScroll inheritedClasses="hero__more-content-scroll" />
    </section>
  );
};

export default Hero;
