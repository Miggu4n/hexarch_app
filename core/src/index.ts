// Express
import express from "express";

// ENV variables
import { config } from "dotenv";

// Services
import birthdaysAPI from "./ports/birthdaysAPI";
import birthdayEmailSender from "./ports/birthdaysSender";

config();

birthdaysAPI();
birthdayEmailSender();
