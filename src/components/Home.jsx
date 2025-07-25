// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';
import NewsCard from './NewsCard';
import '../styles/Home.css';
import Error from './Error';
import Loading from './Loading';  // Import the Loading component

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState('');       // Track error

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>📰 Today's News</h2>
      </div>

      {error && <Error message={error} />}

      {loading ? (
        <Loading />
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
