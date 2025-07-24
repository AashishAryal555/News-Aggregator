import axios from "axios";

const API_KEY = "pub_049100533d08420fa7c9cbba5b4b0dae";
const BASE_URL = "https://newsdata.io/api/1/news";

export const fetchNews = async (params = {}) => {
	try {
		const queryParams = new URLSearchParams({
			apikey: API_KEY,
			language: "en",
			...params,
		});

		const url = `${BASE_URL}?${queryParams.toString()}`;
		const response = await axios.get(url);
		return response.data.results;
	} catch (error) {
		throw error;
	}
};