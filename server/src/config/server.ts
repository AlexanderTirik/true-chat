import express from "express";
import setRoutes from "./routes"

const server = express();
const cors = require("cors");

server.use(cors())
server.use(express.json())


setRoutes(server)

export default server;
