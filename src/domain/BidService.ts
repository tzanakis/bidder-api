import { CampaignClient } from "../connectors/campaignClient";
import { BidRequest } from "../http/types/BidControllerTypes";
import { mapBidRequestToBid } from "../mappers/bidMapper";
import { Bid } from "./types";

export class BidService {
  constructor(private campaignClient: CampaignClient) {}

  public async getBid(bidRequest: BidRequest): Promise<Bid> {
    const bid = mapBidRequestToBid(bidRequest);

    const allCampaigns = await this.campaignClient.getCampaigns();

    const targetedCampaigns = allCampaigns.filter(
      (campaign) =>
        campaign.targetedCountry.name ===
          bid.mobileDeviceInfo?.geoLocation.country &&
        campaign.targetedCountry.targetedLocation.maxLatitude >=
          bid.mobileDeviceInfo?.geoLocation?.latitude &&
        campaign.targetedCountry.targetedLocation.minLatitude <=
          bid.mobileDeviceInfo.geoLocation.latitude &&
        campaign.targetedCountry.targetedLocation.maxLongitude >=
          bid.mobileDeviceInfo.geoLocation.longitude &&
        campaign.targetedCountry.targetedLocation.minLongitude <=
          bidRequest.mobileDeviceInfo.geoLocation.longitude
    );

    if (!targetedCampaigns || targetedCampaigns.length === 0) {
      return bid;
    }

    const highestPriceCampaign = targetedCampaigns.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );

    bid.campaign = {
      id: highestPriceCampaign.id,
      price: highestPriceCampaign.price,
      scriptingCode: highestPriceCampaign.adCreative,
    };

    return bid;
  }
}
