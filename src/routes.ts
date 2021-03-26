import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response): Response {
  CreateCourseService.execute("NodeJs", 10, "Dani");

  return response.send();
}