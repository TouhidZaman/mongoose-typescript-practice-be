import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.routes";
import productRoutes from "./app/modules/product/product.route";

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

export default app;
