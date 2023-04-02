export type CampaignApiConfiguration = {
  baseUrl: string;
  authentication: {
    username: string;
    password: string;
  };
};

export type CampaignInfo = {
  id: string;
  name: string;
  price: number;
  adCreative: string;
  targetedCountry: {
    name: string;
    targetedLocation: {
      maxLatitude: number;
      minLatitude: number;
      maxLongitude: number;
      minLongitude: number;
    };
  
  };
};
