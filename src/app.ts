import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productsRouter from './routers/products';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use(errorMiddleware);
export default app;
