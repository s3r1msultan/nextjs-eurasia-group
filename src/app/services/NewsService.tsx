import axios from "axios";

const API_BASE_URL = "https://api.eurasia.crocos.kz/api/v1";

export const getNewsList = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/whats-new/records`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching news list:", error);
		throw error;
	}
};

export const getNewsById = async (id: number) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/whats-new/records/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching news item with ID ${id}:`, error);
		throw error;
	}
};
