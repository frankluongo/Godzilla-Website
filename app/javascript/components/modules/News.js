import React from "react";
import Article from "./News/Article";

const News = () => {
  return (
    <section className="news layout-split">
      <div className="news__images">
        <figure
          className="has-background-image news-images__image"
          style={{ backgroundImage: "url('http://placekitten.com/600/600')" }}
        >
          image goes here
        </figure>
        <figure
          className="has-background-image news-images__image"
          style={{ backgroundImage: "url('http://placekitten.com/700/700')" }}
        >
          image goes here
        </figure>
      </div>
      <div className="news__feed">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default News;
