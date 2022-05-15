import { Pool } from 'mysql2/promise';
import Order from '../types/order.types';

class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');

    return orders as Order[];
  }
}

export default OrdersModel;
