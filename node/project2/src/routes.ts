import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCrouse(request: Request, response: Response) {
  CreateCourseService.execute({ course: "Node JS", time: 10, educator: "Wel" });

  return response.send();
}
