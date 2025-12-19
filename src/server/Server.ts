import express from "express";
import "dotenv/config"
import { router } from "./routes/router";


const server = express();
server.use(express.json());
server.use(router)

export {server}