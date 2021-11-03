// Express
import express from "express";
import cors from "cors";

// Database
import connect from "../../db";
connect("birthaysAPI");

// ENV Variables
const SERVER_PORT: number = process.env.SERVER_PORT || 4000;

// Routes
import birthdayRoutes from "./routes";

// Celebrate
import { errors } from "celebrate";

// Main
const server = express();
server.use(express.json());
server.use(cors());
server.use(errors());

server.use("/api/birthdays", birthdayRoutes);

const birthdaysAPI = () =>
  server.listen(SERVER_PORT, () =>
    console.log("birthdayAPI: Server started on port " + SERVER_PORT)
  );

// Export
export default birthdaysAPI;
