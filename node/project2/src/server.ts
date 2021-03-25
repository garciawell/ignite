import express from "express";
import { createCrouse } from "./routes";

const app = express();

app.get("/", createCrouse)

app.listen(3333)