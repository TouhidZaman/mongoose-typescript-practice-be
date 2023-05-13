import { Router } from "express";
import { createUser } from "./user.controller";

const userRoutes = Router();

userRoutes.route("/").post(createUser);

export default userRoutes;
