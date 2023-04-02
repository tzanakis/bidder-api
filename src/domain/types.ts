import { Geolocation } from "../http/types/GeneralTypes";

export type Bid = {
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
  campaign?: {
    id: string;
    price: number;
    scriptingCode: string;
  }
};

export type Campaign = {
  campaignId: string;
  name: string;
  price: number;
  scriptCode: string;
  supportedAreas: Country[];
  bids: Bid[];
};

export type Location = {
  maxLatitude: number;
  minLatitude: number;
  maxLongitude: number;
  minLongitude: number;
};

export type Country = {
  name: string;
  locations: Location[];
};
