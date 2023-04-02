import axios, { AxiosInstance } from "axios";
import { CampaignApiConfiguration } from "../types";
import { errorHandler } from "./utils";

export const campaignClient = (
  campaignConfiguration: CampaignApiConfiguration
): AxiosInstance => {
 const instance = axios.create({
    baseURL: campaignConfiguration.baseUrl,
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
    },
  });

  instance.interceptors.response.use(undefined, (error) => {
    return errorHandler(error);
  });

  return instance
};
