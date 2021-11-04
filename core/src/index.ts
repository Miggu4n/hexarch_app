// ENV variables
import { config } from "dotenv";
config();

// Services
import birthdaysAPI from "./ports/birthdaysAPI";
import birthdayEmailSender from "./ports/birthdaysSender";

// Services run
birthdaysAPI();
birthdayEmailSender();
