export type AppConfiguration = {
  campaignApi: {
    baseUrl: string;
    authentication: {
      username: string;
      password: string;
    };
  };
};

export const getAppConfiguration = (): AppConfiguration => {
  return {
    campaignApi: {
      baseUrl: "http://myservice.atservice.com",
      authentication: {
        username: "admin",
        password: "password",
      },
    },
  };
};
