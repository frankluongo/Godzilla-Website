import React from "react";

const FullPageCallout = () => {
  return (
    <section
      className="full-page-callout has-background-image"
      style={{ backgroundImage: "url('http://placekitten.com/1440/900')" }}
    >
      <div className="full-page-callout__content">Callout content</div>
    </section>
  );
};

export default FullPageCallout;
