// Mongoose
import mongoose, { Connection, Mongoose } from "mongoose";

// Env variables
import { config } from "dotenv";
config();
const { DB_HOST = "", DB_PORT = 0, DB_NAME = "" } = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

console.log(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const database = mongoose.connection;

database.on("error", (error) => console.error(error));

const connect = (service: string) => {
  database.once("open", () =>
    console.log(`${service}: connected to Database!`)
  );
};

export default connect;
