import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";
import { ensureAuth } from "@shared/infra/http/middlewares/ensureAuth";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsersController = new CreateUserController();
const updateUsersController = new UpdateUserAvatarController();

usersRoutes.post("/", createUsersController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuth,
  uploadAvatar.single("avatar"),
  updateUsersController.handle
);

export { usersRoutes };
