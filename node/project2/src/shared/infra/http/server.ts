import * as dotenv from "dotenv";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import { AppError } from "@shared/errors/AppError";
import { router } from "@shared/infra/http/routes";
import createConnection from "@shared/infra/typeorm";

import swaggerOptions from "../../../swagger.json";

dotenv.config({ path: `${__dirname}/.env` });

createConnection();
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use(router);

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({
      message: err.message,
    });
  }

  return resp.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running"));
