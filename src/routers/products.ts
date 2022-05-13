import { Router } from 'express';
import ProductsController from '../controllers/products';

const route: Router = Router();

const productsController = new ProductsController();

route
  .get('/', productsController.getAll);

export default route;
