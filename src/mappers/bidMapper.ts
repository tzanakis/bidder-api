import { Bid } from "../domain/types";
import { BidRequest, BidResponse } from "../http/types/BidControllerTypes";

export const mapBidRequestToBid = (bidRequest: BidRequest): Bid => {
  return {
    bidId: bidRequest.bidId,
    mobileAppInfo: {
      id: bidRequest.mobileAppInfo.id,
      name: bidRequest.mobileAppInfo.name,
    },
    mobileDeviceInfo: {
      deviceId: bidRequest.mobileDeviceInfo.deviceId,
      operatingSystem: bidRequest.mobileDeviceInfo.operatingSystem,
      geoLocation: {
        latitude: bidRequest.mobileDeviceInfo.geoLocation.latitude,
        longitude: bidRequest.mobileDeviceInfo.geoLocation.longitude,
        country: bidRequest.mobileDeviceInfo.geoLocation.country,
      },
    },
  };
};

export const mapBidToBidResponse = (bid: Bid): BidResponse => {
  return {
    bidId: bid.bidId,
    campaignId: bid.campaign?.id,
    price: bid.campaign?.price,
    adCreative: bid.campaign?.scriptingCode,
  };
};
