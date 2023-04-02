import express from "express";
import { BidPostRouteHandler } from "./http/controllers/BidController";
import { bidRoute } from "./http/routes";
import { body } from "express-validator";

const app = express();
const port = 3000;

app.use(express.json());

app.post(
  bidRoute,
  [
    body("bidId").isUUID(),
    body("mobileAppInfo").exists(),
    body("mobileAppInfo.id").isUUID(),
    body("mobileAppInfo.name").isString().isLength({ min: 5, max: 1000 }),
    body("mobileDeviceInfo").exists(),
    body("mobileDeviceInfo.deviceId").isUUID(),
    body("mobileDeviceInfo.operatingSystem")
      .isString()
      .isLength({ min: 5, max: 1000 }),
    body("mobileDeviceInfo.geoLocation").exists(),
    body("mobileDeviceInfo.geoLocation.latitude").isFloat({
      min: -90,
      max: 90,
    }),
    body("mobileDeviceInfo.geoLocation.longitude").isFloat({
      min: -180,
      max: 180,
    }),
    body("mobileDeviceInfo.geoLocation.country").isString().isLength({min: 2, max: 2}),
  ],
  BidPostRouteHandler
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
