import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product, { ProductOrder } from '../types/product.types';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return products as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) values (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product } as Product;
  }

  public async updateOrderById(productOrder: ProductOrder): Promise<void> {
    const { id, orderId } = productOrder;

    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
  }
}

export default ProductsModel;