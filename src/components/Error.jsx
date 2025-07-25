import React from 'react';
 // Make sure this file exists

export default function Error({ message }) {
  return (
    <div className="error-text">
      ⚠️ {message || "Something went wrong. Please try again later."}⚠️
    </div>
  );
}
