import connection from '../models/connection';
import ProductsModel from '../models/products';
import Product, { ProductOrder } from '../types/product.types';

class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products: Product[] = await this.model.getAll();

    return products;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const resultProduct = await this.model.create({ name, amount });

    return resultProduct;
  }

  public async updateOrderById(productOrder: ProductOrder): Promise<void> {
    const { id, orderId } = productOrder;

    await this.model.updateOrderById({ id, orderId });
  }
}

export default ProductsService;