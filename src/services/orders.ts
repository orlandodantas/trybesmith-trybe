import connection from '../models/connection';
import OrdersModel from '../models/orders';
import { OrderWithProducts } from '../types/order.types';
import ProductsService from './products';

class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<OrderWithProducts[]> {
    const orders = await this.model.getAll();
    const productsService = new ProductsService();

    const products = await productsService.getAll();

    const orderWithProducts = orders.map((order): OrderWithProducts => (
      {
        ...order,
        productsIds: products.filter((product) => product.orderId === order.id)
          .map((product) => product.id),
      }
    ));

    return orderWithProducts;
  }

  public async create(order: OrderWithProducts): Promise<OrderWithProducts> {
    const { userId, productsIds } = order;

    const orderId = await this.model.create(userId);
    const productService = new ProductsService();

    productsIds.forEach(async (productId) => {
      await productService.updateOrderById({ id: productId as number, orderId });
    });

    return { userId, productsIds };
  }
}

export default OrdersService;