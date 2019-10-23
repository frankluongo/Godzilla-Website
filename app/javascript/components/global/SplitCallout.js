import React from "react";

const SplitCallout = ({ orientation }) => {
  return (
    <section className={`split-callout ${orientation}`}>
      <figure
        className="split-callout__image has-background-image"
        style={{ backgroundImage: "url('https://placekitten.com/800/800')" }}
      ></figure>
      <div className="split-callout__content">Content</div>
    </section>
  );
};

SplitCallout.defaultProps = {
  orientation: "left"
};

export default SplitCallout;
