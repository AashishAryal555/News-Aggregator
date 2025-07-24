import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import "../styles/language.css";  // Create this CSS similar to country.css
import { fetchNews } from "../api/newsApi";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ne", name: "Nepali" },
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "zh", name: "Chinese" },
];

export default function Language() {
  const { languageCode } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!languageCode) return;
    fetchNews({ language: languageCode }).then(setArticles);
  }, [languageCode]);

  return (
    <div className="language-page">
      <main className="articles-section">
        <h2>Language: {languageCode.toUpperCase()}</h2>
        <div className="news-grid">
          {articles.length > 0 ? (
            articles.map((item, idx) => <NewsCard key={idx} article={item} />)
          ) : (
            <p>No articles available for this language.</p>
          )}
        </div>
      </main>

      <aside className="sidebar">
        <h3>Browse by Language</h3>
        <ul className="language-list">
          {languages.map(({ code, name }) => (
            <li
              key={code}
              className={code === languageCode ? "active" : ""}
              onClick={() => navigate(`/language/${code}`)}
            >
              {name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
