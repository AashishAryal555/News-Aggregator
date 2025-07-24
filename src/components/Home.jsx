// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';
import NewsCard from './NewsCard';
import '../styles/Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setArticles(data);
    };
    loadNews();
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>📰 Todays News </h2>
      </div>

      {articles.length === 0 ? (
        <p className="loading-text">Loading news...</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
