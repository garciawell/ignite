import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const carsRoutes = Router();

const createCar = new CreateCarController();
const listCar = new ListCarsController();
const carSpecification = new CreateCarSpecificationController();

carsRoutes.post("/", ensureAuth, ensureAdmin, createCar.handle);
carsRoutes.get("/available", listCar.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuth,
  ensureAdmin,
  carSpecification.handle
);

export { carsRoutes };
