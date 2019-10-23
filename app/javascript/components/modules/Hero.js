import React from "react";
import MoreContentScroll from "../global/MoreContentScroll";

const Hero = () => {
  return (
    <section
      className="hero box has-background-image"
      style={{ backgroundImage: "url('https://placekitten.com/1920/1080')" }}
    >
      <article className="hero__content container">
        This is the hero content
      </article>
      <MoreContentScroll inheritedClasses="hero__more-content-scroll" />
    </section>
  );
};

export default Hero;
