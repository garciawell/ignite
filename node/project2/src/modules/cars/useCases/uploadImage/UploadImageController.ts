import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadImageUseCase } from "./UploadImageUseCase";

interface IFiles {
  filename: string;
}

class UploadImageController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const images = req.files as IFiles[];
    const uploadCarImageUseCase = container.resolve(UploadImageUseCase);

    const fileNames = images.map((file) => file.filename);

    uploadCarImageUseCase.execute({
      car_id: id,
      images_name: fileNames,
    });

    return res.status(201).send();
  }
}

export { UploadImageController };
