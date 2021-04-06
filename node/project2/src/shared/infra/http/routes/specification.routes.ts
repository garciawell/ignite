import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuth } from "@shared/infra/http/middlewares/ensureAuth";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuth);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
