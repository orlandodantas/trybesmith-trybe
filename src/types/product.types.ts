type Product = {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
};

export type ProductOrder = {
  id: number;
  orderId: number;
};

export default Product;