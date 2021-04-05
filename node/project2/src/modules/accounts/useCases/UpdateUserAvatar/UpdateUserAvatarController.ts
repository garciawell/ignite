import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarCase";

class UpdateUserAvatarController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { id } = req.user;
    const avatar_file = req.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    updateUserAvatarUseCase.execute({ avatar_file, user_id: id });

    return resp.status(204).send();
  }
}

export { UpdateUserAvatarController };
