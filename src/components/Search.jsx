import React, { useState } from 'react';
import '../styles/Search.css';

const API_KEY = 'pub_9deecb42670c4744aab59e5ab36fb54e'; // Your actual key

export default function Search() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setArticles([]);

    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?q=${encodeURIComponent(query)}&apikey=${API_KEY}`
      );
      const data = await response.json();

      // newsdata.io returns "results" instead of "articles"
      if (data.status === 'success') {
        if (!data.results || data.results.length === 0) {
          setError('No results found.');
        } else {
          setArticles(data.results);
        }
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to fetch news.');
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchNews();
    }
  };

  return (
    <div className="search-container">
      <h2>Search News</h2>
      <input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button onClick={searchNews} className="search-button" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="error-text">{error}</p>}

      <div className="results-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="news-image" />
            )}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
