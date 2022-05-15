import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders';
import { OrderWithProducts } from '../types/order.types';

class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  public getAll = async (req: Request, res: Response): Promise<Response | void> => {
    const orders: OrderWithProducts[] = await this.ordersService.getAll();

    res.status(StatusCodes.OK).json(orders);
  };
}

export default OrdersController;