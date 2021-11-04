// Express
import express from "express";
const birthdays = express.Router();

// Routes
import getBirthdays from "./middlewares/getBirthdays";
import newBirthday from "./middlewares/newBirthday";

// Validations
import { celebrate } from "celebrate";
import newBirthdayBodyValidation from "./validations/newBirthday";

birthdays.get("/", getBirthdays);
birthdays.post("/", celebrate(newBirthdayBodyValidation), newBirthday);

export default birthdays;
