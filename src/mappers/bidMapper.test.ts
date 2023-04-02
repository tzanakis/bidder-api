import { Bid } from "../domain/types";
import { mapBidRequestToBid, mapBidToBidResponse } from "./bidMapper";

describe("BidMapper", () => {
  describe("mapBidRequestToBid", () => {
    it("should map a bid request to a bid", () => {
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
            latitude: 1,
            longitude: 1,
            country: "country",
          },
        },
      };

      const bid = mapBidRequestToBid(bidRequest);

      expect(bid).toEqual({
        bidId: "bidId",
        mobileAppInfo: {
          id: "id",
          name: "name",
        },
        mobileDeviceInfo: {
          deviceId: "deviceId",
          operatingSystem: "operatingSystem",
          geoLocation: {
            latitude: 1,
            longitude: 1,
            country: "country",
          },
        },
      });
    });
  });

  describe("mapBidToBidResponse", () => {
    it("should map a bid to a bid response when no matched campaign is found", () => {
      const bid: Bid = {
        bidId: "bidId",
        mobileAppInfo: {
          id: "id",
          name: "name",
        },
        mobileDeviceInfo: {
          deviceId: "deviceId",
          operatingSystem: "operatingSystem",
          geoLocation: {
            latitude: 1,
            longitude: 1,
            country: "country",
          },
        },
      };

      const bidResponse = mapBidToBidResponse(bid);

      expect(bidResponse).toEqual({
        bidId: "bidId"});

    });

    it("should map a bid to a bid response when matched campaign is found", () => {
      const bid: Bid = {
        bidId: "bidId",
        mobileAppInfo: {
          id: "id",
          name: "name",
        },
        mobileDeviceInfo: {
          deviceId: "deviceId",
          operatingSystem: "operatingSystem",
          geoLocation: {
            latitude: 1,
            longitude: 1,
            country: "country",
          },
        },
        campaign: {
          id: "campaignId",
          price: 15.128,
          scriptingCode: "scriptingCode",
        }
      };

      const bidResponse = mapBidToBidResponse(bid);

      expect(bidResponse).toEqual({
        bidId: "bidId",
        campaignId: "campaignId",
        price: 15.128,
        adCreative: "scriptingCode",
      });
    });
  });
});
