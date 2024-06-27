import axios from "axios";
import {
	NotFoundError,
	BadRequestError,
	ServerError,
	NetworkError,
} from "@/app/utils/errors";
import { INews } from "../constants/interfaces";

const API_BASE_URL = "https://api.eurasia.crocos.kz/api/v1";

const handleAxiosError = (error: any): never => {
	if (error.response) {
		switch (error.response.status) {
			case 400:
				throw new BadRequestError("Bad request. Please check your input.");
			case 404:
				throw new NotFoundError("Resource not found.");
			case 500:
				throw new ServerError("Internal server error. Please try again later.");
			default:
				throw new ServerError("An unexpected error occurred.");
		}
	} else if (error.request) {
		throw new NetworkError(
			"Network error. Please check your internet connection.",
		);
	} else {
		throw new Error("An unexpected error occurred.");
	}
};

export const getWhatsNewRecords = async (): Promise<{ data: INews[] }> => {
	try {
		const response = await axios.get(`${API_BASE_URL}/whats-new/records`, {
			headers: { 'Content-Type': 'application/json'}
		});

		return response.data;
	} catch (error) {
		handleAxiosError(error);
	}
	return { data: [] };
};

export const getWhatsNewRecordById = async (
	id: number,
): Promise<{ data: INews }> => {
	try {
		console.log(id);
		const response = await axios.get(`${API_BASE_URL}/whats-new/records/${id}`, 
			{headers: { 'Content-Type': 'application/json', "Accept-Language": "ru"}}

		);
		return response.data;
	} catch (error) {
		console.log(error);
		handleAxiosError(error);
	}
	return { data: {} as INews };
};
