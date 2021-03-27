import { Router } from "express";

import { CateogiesRepository } from "../repositories/CatergoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CateogiesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };
