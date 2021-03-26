import { Request, Response } from "express";
import createCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response): Response {
  createCourseService.execute({
    name: "NodeJs",
    educator: "Dani",
    duration: 10
  });

  createCourseService.execute({
    name: "ReactJS",
    educator: "Diego"
  });

  return response.send();
}