import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Error from "../components/Error";  // Make sure you have this Error component
import Loading from "../components/Loading"; // Import Loading component
import "../styles/country.css";
import { fetchNews } from "../api/newsApi";

const countries = [
  { code: "us", name: "USA" },
  { code: "in", name: "India" },
  { code: "np", name: "Nepal" },
  { code: "gb", name: "UK" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "de", name: "Germany" },
];

export default function Country() {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);  // For error handling
  const [loading, setLoading] = useState(false); // Optional loading state

  useEffect(() => {
    if (!countryCode) return;

    setLoading(true);
    setError(null); // Reset error before fetching

    fetchNews({ country: countryCode })
      .then(setArticles)
      .catch((err) => {
        setError("Failed to load news articles. Please try again.");
        setArticles([]); // Clear articles on error if you want
      })
      .finally(() => setLoading(false));
  }, [countryCode]);

  return (
    <div className="country-page">
      <main className="articles-section">
        <h2>Country: {countryCode.toUpperCase()}</h2>

        {loading && <Loading />}

        {error && <Error message={error} />}

        {!loading && !error && (
          <div className="news-grid">
            {articles.length > 0 ? (
              articles.map((item, idx) => <NewsCard key={idx} article={item} />)
            ) : (
              <p>No articles available for this country.</p>
            )}
          </div>
        )}
      </main>

      <aside className="sidebar">
        <h3>Browse by Country</h3>
        <ul className="country-list">
          {countries.map(({ code, name }) => (
            <li
              key={code}
              className={code === countryCode ? "active" : ""}
              onClick={() => navigate(`/country/${code}`)}
            >
              {name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
