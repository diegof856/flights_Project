import express from "express";
import "dotenv/config"
import { router } from "./routes/router";
import { errorHandler } from "../middleware/ErrorMiddleware";


const server = express();
server.use(express.json());
server.use(router)
server.use(errorHandler);
export {server}