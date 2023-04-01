import express from "express";
import {
  sampleGetRouteHandler,
  samplePostRouteHandler,
} from "./http/controllers/SampleController";
import { sampleRoute } from "./http/routes";
import { body } from "express-validator";

const app = express();
const port = 3000;

app.use(express.json());
app.get(sampleRoute, sampleGetRouteHandler);
app.post(
  sampleRoute,
  [body("username").isEmail(), body("password").isLength({ min: 5 })],
  samplePostRouteHandler
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
