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
}

export default ProductsService;