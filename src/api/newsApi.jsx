import axios from "axios";

const API_KEY = "pub_9deecb42670c4744aab59e5ab36fb54e";
const BASE_URL = "https://newsdata.io/api/1/news";

// api/newsApi.js
export const fetchNews = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      apikey: API_KEY,
      language: "en",
      ...params,
    });

    const url = `${BASE_URL}?${queryParams.toString()}`;
    const response = await axios.get(url);

    if (!response.data.results || response.data.results.length === 0) {
      throw new Error("No news found for the given parameters.");
    }

    return response.data.results;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Something went wrong while fetching news.";
    console.error("API Error:", message);

    throw new Error(message); // ✅ Rethrow the error to be caught in useEffect
  }
};
