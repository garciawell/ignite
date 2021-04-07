import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuth } from "@shared/infra/http/middlewares/ensureAuth";

import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuth,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRoutes };
