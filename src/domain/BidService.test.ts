import { CampaignClient } from "../connectors/campaignClient";
import { BidService } from "./BidService";

const createCampaignClientMock = (): jest.Mocked<CampaignClient> => {
  return {
    getCampaigns: jest.fn(),
  } as unknown as jest.Mocked<CampaignClient>;
};

describe("BidService", () => {
  it("should return a bid with an empty campaign when no campaign found", async () => {
    // Arrange
    const campaignClient = createCampaignClientMock();
    campaignClient.getCampaigns.mockResolvedValue([]);
    const bidRequest = {
      bidId: "bidId",
      mobileAppInfo: {
        id: "id",
        name: "name",
      },
      mobileDeviceInfo: {
        deviceId: "deviceId",
        operatingSystem: "operatingSystem",
        geoLocation: {
          country: "US",
          latitude: 37.7749,
          longitude: -122.4194,
        },
      },
    };

    const bidService = new BidService(campaignClient);

    // Act
    const bid = await bidService.getBid(bidRequest);
    expect(bid.campaign).toBeUndefined
  });
});
