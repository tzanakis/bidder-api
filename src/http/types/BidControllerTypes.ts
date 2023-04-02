import { Geolocation } from "./GeneralTypes";

export type BidRequest = {
  bidId: string;
  mobileAppInfo: {
    id: string;
    name: string;
  };
  mobileDeviceInfo: {
    deviceId: string;
    operatingSystem: string;
    geoLocation: Geolocation;
  };
};

export type BidResponse = {
    bidId: string
    campaignId?: string;
    price?: number;
    adCreative?: string;
};