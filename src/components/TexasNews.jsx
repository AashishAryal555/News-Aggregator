import React from 'react';
import '../styles/TexasNews.css';
import logo from '../assets/download.png'; // Make sure this image exists in your assets folder

export default function TexasNews() {
  return (
    <div className="texas-news-container">
      <img src={logo} alt="Texas Logo" className="texas-news-logo" />
      <h1 className="texas-news-title">📢 Texas News is Coming Soon!</h1>
      <p className="texas-news-description">
        Stay tuned for updates on the latest happenings in Texas.
      </p>
    </div>
  );
}
