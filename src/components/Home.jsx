// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../api/newsApi';
import NewsCard from './NewsCard';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchTopHeadlines();
      setArticles(data);
    };
    loadNews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">📰 Headlines</h2>
      {articles.length === 0 ? (
        <p className="text-gray-600">Loading news...</p>
      ) : (
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      )}
    </div>
  );
};

export default Home;
