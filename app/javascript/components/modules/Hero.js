import React from "react";
import MoreContentScroll from "../global/MoreContentScroll";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__content">This is the hero content</article>
      <MoreContentScroll inheritedClasses="hero__more-content-scroll" />
    </section>
  );
};

export default Hero;
