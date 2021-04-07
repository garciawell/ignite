import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const carsRoutes = Router();

const createCar = new CreateCarController();
const listCar = new ListCarsController();

carsRoutes.post("/", ensureAuth, ensureAdmin, createCar.handle);
carsRoutes.get("/available", listCar.handle);

export { carsRoutes };
