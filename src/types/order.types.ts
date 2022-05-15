// import Product from './product.types';

type Order = {
  id?: number;
  userId: number;
};

export type OrderWithProducts = Order & {
  productsIds: (number | undefined)[];
};

export default Order;