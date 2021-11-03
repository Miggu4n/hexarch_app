// Express
import { celebrate } from "celebrate";
import express from "express";
const birthdayRoutes = express.Router();

// Routes
import getBirthdays from "./middlewares/getBirthdays";
import newBirthday from "./middlewares/newBirthday";
import newBirthdayBodyValidation from "./validations/newBirthday";

// Validations

birthdayRoutes.get("/", getBirthdays);
birthdayRoutes.post("/", celebrate(newBirthdayBodyValidation), newBirthday);

export default birthdayRoutes;
