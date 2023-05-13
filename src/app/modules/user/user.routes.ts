import { Router } from "express";
import { createUser, getFemaleUsers } from "./user.controller";

const userRoutes = Router();

userRoutes.route("/").post(createUser);
userRoutes.route("/female").get(getFemaleUsers);

export default userRoutes;
