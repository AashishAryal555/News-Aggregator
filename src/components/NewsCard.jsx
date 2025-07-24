import React from 'react';
import '../styles/newscard.css';

const MAX_DESCRIPTION_LENGTH = 150; // Adjust as needed for 2–3 lines

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.image_url && (
        <img src={article.image_url} alt="news" />
      )}

      <div className="news-card-content">
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-description">
          {truncateText(article.description, MAX_DESCRIPTION_LENGTH)}
        </p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card-link"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
