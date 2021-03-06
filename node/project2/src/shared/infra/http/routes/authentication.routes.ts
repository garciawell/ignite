import { Router } from "express";

import { AuthUserController } from "@modules/accounts/useCases/AuthUser/AuthUserController";

const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/", authUserController.handle);

export { authRoutes };
