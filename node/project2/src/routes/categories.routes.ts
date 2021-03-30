import { response, Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const upload = multer({
  dest: "./tmp",
});
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoriesRoutes.get("/", (req, res) =>
  listCategoriesController.handle(req, res)
);
categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  const { file } = req;
  console.log(file);
  return res.send(file);
});

export { categoriesRoutes };
