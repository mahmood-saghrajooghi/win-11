import { AxiosError } from "axios";

export interface ServiceError {
	message: string;
	title: string;
	originalError: AxiosError;
}