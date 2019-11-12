import React from 'react';

const Article = ({ content }) => {
  return (
    <a href={`/news/${content.slug}`} className="article">
      <figure
        className="article__image has-background-image"
        style={{
          backgroundImage: `url(${content.image.medium.url})`,
        }}
      />
      <div className="article__content">
        <h3 className="article-content__title sans-serif m-xsmall-bottom-2">
          {content.title}
        </h3>
        <p className="article-content__teaser serif italic">{content.teaser}</p>
      </div>
    </a>
  );
};

export default Article;
