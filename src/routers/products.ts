import { Router } from 'express';
import ProductsController from '../controllers/products';
import productValidate from '../middlewares/productValidate';

const route: Router = Router();

const productsController = new ProductsController();

route
  .get('/', productsController.getAll)
  .post('/', productValidate, productsController.create);

export default route;
