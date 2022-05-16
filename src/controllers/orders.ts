import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders';
import CustomRequest from '../types/express.types';
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

  public create = async (req: CustomRequest, res: Response): Promise<Response | void> => {
    const { productsIds } = req.body;
    const userId = req.userId as number;

    const result = await this.ordersService.create({ userId, productsIds });
    res.status(StatusCodes.CREATED).json(result);
  };
}

export default OrdersController;