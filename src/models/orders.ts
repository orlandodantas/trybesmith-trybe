import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async create(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) values (?)', [userId]);
    
    return insertId;
  }
}

export default OrdersModel;
