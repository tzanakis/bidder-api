import { campaignClient } from "./configs/axiosClients";
import { CampaignApiConfiguration, CampaignInfo } from "./types";

export class CampaignClient {
  constructor(private campaignApiConfiguration: CampaignApiConfiguration) {}

  public async getCampaigns() {
    const campaigns: CampaignInfo[] = await campaignClient(
      this.campaignApiConfiguration
    ).get("/campaigns", { timeout: 30000 });

    return campaigns;
  }
}
