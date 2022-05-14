import connection from '../models/connection';
import ProductsModel from '../models/products';
import Product from '../types/product.types';

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
}

export default ProductsService;