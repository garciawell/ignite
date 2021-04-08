import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";
import { UploadImageController } from "@modules/cars/useCases/uploadImage/UploadImageController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const carsRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/cars"));

const createCar = new CreateCarController();
const listCar = new ListCarsController();
const carSpecification = new CreateCarSpecificationController();
const uploadCarImage = new UploadImageController();

carsRoutes.post("/", ensureAuth, ensureAdmin, createCar.handle);
carsRoutes.get("/available", listCar.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuth,
  ensureAdmin,
  carSpecification.handle
);
carsRoutes.post(
  "/images/:id",
  ensureAuth,
  ensureAdmin,
  uploadAvatar.array("images"),
  uploadCarImage.handle
);

export { carsRoutes };
