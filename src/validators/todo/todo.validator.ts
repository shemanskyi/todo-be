import { body } from "express-validator";

export const todoValidator = () => {
  return [
    body("title").notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Description is required."),
    body("completed").notEmpty().withMessage("Completed is required."),
    body("deadline").notEmpty().withMessage("Deadline is required."),
  ];
};
