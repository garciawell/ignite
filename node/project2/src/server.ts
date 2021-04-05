import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";
import { router } from "./routes";
import swaggerOptions from "./swagger.json";

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use(router);

app.listen(3333, () => console.log("Server is running"));
