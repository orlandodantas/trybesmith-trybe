import { Router } from 'express';
import OrdersController from '../controllers/orders';
import auth from '../middlewares/auth';
import orderValidate from '../middlewares/orderValidate';

const route = Router();
const ordersController = new OrdersController();

route
  .get('/', ordersController.getAll)
  .post('/', auth, orderValidate, ordersController.create);

export default route;