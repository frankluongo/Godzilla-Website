import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const Feature = ({ image }) => {
  const [showModal, toggleModalDisplay] = useState(false);

  const animation = useSpring({
    opacity: showModal ? 1 : 0,
  });

  function handleButtonClick() {
    toggleModalDisplay(!showModal);
  }

  return (
    <section
      className="feature has-background-image container"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="feature__content container">
        <button onClick={handleButtonClick.bind(this)}>Play</button>
      </div>
      <animated.div className="feature__modal" style={animation}>
        <button onClick={handleButtonClick.bind(this)}>Close</button>
        <div className="responsive-video__wrapper">
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="feature-modal__video responsive-video"
            frameborder="0"
            src="https://www.youtube.com/embed/QFxN2oDKk0E"
          />
        </div>
      </animated.div>
    </section>
  );
};

export default Feature;
