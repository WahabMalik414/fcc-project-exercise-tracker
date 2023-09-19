import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.get("/", (req: Express.Request, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello" });
});

app.get("/api/users", async (req: Request, res: Response) => {
  //TODO:1 You can make a GET request to /api/users to get a list of all users.
  //TODO:2 The GET request to /api/users returns an array.
  //TODO:3 Each element in the array returned from GET /api/users is an object literal containing a user's username and _id
});

app.post("/api/users", async (req: Request, res: Response) => {
  //TODO:4 Waiting:You can POST to /api/users with form data username to create a new user.
  //TODO:5 The returned response from POST /api/users with form data username will be an object with username and _id properties
});

app.post("/api/users/:_id/exercises", async (req: Request, res: Response) => {
  //TODO:6 You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
  //TODO:7 The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
});

app.get("/api/users/:_id/logs", async (req: Request, res: Response) => {
  //TODO:8 You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
  //TODO:9 A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
  //TODO:10 A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
  //TODO:11 Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.
  //TODO:12 The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.
  //TODO:13 The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.
  //TODO:14 The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.
  //TODO:15 You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
