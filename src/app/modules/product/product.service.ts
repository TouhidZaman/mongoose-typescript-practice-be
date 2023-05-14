import { IProduct } from "./product.interface";
import Product from "./product.model";

export const createProductToBD = async (productData: IProduct) => {
  const product = new Product(productData);
  const result = await product.save();
  return result;
};
