import { Router } from 'express';
import OrdersController from '../controllers/orders';

const route = Router();
const ordersController = new OrdersController();

route
  .get('/', ordersController.getAll);

export default route;