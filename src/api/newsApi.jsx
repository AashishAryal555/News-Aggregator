// src/api/newsApi.js
import axios from 'axios';

const API_KEY = 'Ypub_e8e248600bcb44dc9a9b360b7ec37757'; // Replace with your actual key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us', // You can change to 'in', 'gb', 'np', etc.
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
