import express from "express";
import http from "http";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("The server running on http://localhost:3000/");
});
