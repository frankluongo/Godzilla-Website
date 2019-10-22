import React from "react";
import ChevronDown from "../../icons/ChevronDown";

const MoreContentScroll = ({ inheritedClasses }) => {
  function scrollDown() {
    console.log("keep scrollin scrollin scrollin what");
  }

  return (
    <button
      aria-label="Scroll Down to Main Content"
      className={`more-content-scroll ${inheritedClasses}`}
      onClick={scrollDown.bind(this)}
    >
      <ChevronDown />
    </button>
  );
};

export default MoreContentScroll;
