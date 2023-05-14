import { Request, Response } from "express";
import { createProductToBD } from "./product.service";
import { IResponse } from "../../utils/interfaces";
import { IProduct } from "./product.interface";

export const createProduct = async (req: Request, res: Response) => {
  const product = await createProductToBD(req.body);
  const response: IResponse<IProduct> = {
    status: "success",
    message: "Product created successfully",
    data: product,
  };
  res.status(200).json(response);
};
