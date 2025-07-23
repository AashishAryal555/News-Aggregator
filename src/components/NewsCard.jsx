// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      {article.urlToImage && (
        <img src={article.urlToImage} alt="news" className="w-full h-56 object-cover rounded" />
      )}
      <p className="text-gray-700 mt-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium block mt-3"
      >
        Read More →
      </a>
    </div>
  );
};

export default NewsCard;
