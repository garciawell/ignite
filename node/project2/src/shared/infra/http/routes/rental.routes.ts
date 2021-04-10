import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";

import { ensureAuth } from "../middlewares/ensureAuth";

const rentalsRoutes = Router();

const createRental = new CreateRentalController();

rentalsRoutes.post("/", ensureAuth, createRental.handle);

export { rentalsRoutes };
