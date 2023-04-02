import { AxiosError } from "axios";

export const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};
