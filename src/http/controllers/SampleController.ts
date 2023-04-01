import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { SamplePostRequest } from "../types/SampleControllerTypes";

export const sampleGetRouteHandler = (
  request: Request,
  response: Response
): Response => {
  return response.send({ message: "Hello World!!" });
};

export const samplePostRouteHandler = (
  request: Request,
  response: Response
): Response => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  const { username, password }: SamplePostRequest = request.body;

  return response
    .status(201)
    .send({
      username,
      password,
    })
    .end();
};
