import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuth);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
