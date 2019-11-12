import React from 'react';
import Article from './News/Article';

const News = ({ image1, image2, articles }) => {
  return (
    <section className="news layout-split container">
      <div className="news__images">
        <figure
          className="has-background-image news-images__image"
          style={{ backgroundImage: `url('${image1}')` }}
        >
          <h2 className="news-images__title sans-serif">
            <small>godzilla</small>News
          </h2>
        </figure>
        <figure
          className="has-background-image news-images__image"
          style={{ backgroundImage: `url('${image2}')` }}
        />
      </div>
      <div className="news__feed">
        {articles.map(article => (
          <Article key={article.id} content={article} />
        ))}
      </div>
    </section>
  );
};

export default News;
