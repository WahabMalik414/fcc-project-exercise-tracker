import { error } from "console";
import mongoose, { Query, mongo } from "mongoose";
require("dotenv").config();
mongoose.set("strictQuery", false);
const dbUrl = process.env.MONGO_URL;

const connect = async () => {
  try {
    const connection = dbUrl ? await mongoose.connect(dbUrl) : null;
    connection
      ? console.log(connection.connection.host, connection.connection.name)
      : console.log("Undefined DB URL provided!");
  } catch (e: any) {
    console.log(e.message);
  }
};
