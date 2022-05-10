import express from "express";
import { idk } from "../controllers/idk";

const app = express;

const routerThis = app.Router();

routerThis.get("/idk", idk);

export default routerThis;
