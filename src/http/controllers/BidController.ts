import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { BidRequest } from "../types/BidControllerTypes";
import { BidService } from "../../domain/BidService";
import { CampaignClient } from "../../connectors/campaignClient";
import { getAppConfiguration } from "../../appConfiguration/config";
import { mapBidToBidResponse } from "../../mappers/bidMapper";

export const BidPostRouteHandler = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  const input: BidRequest = request.body;

  const bidService = new BidService(new CampaignClient(getAppConfiguration().campaignApi));
  const winningBid = await bidService.getBid(input);
  const bidResponse = mapBidToBidResponse(winningBid);

  return response
    .status(201)
    .send(bidResponse)
    .end();
};
