import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products';
import Product from '../types/product.types';

class ProductsController {
  private productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  public getAll = async (req: Request, res: Response) => {
    const products: Product[] = await this.productService.getAll();
    
    res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body as Product;
    const product = await this.productService.create({ name, amount });

    res.status(StatusCodes.CREATED).json(product);
  };
}

export default ProductsController;