import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productsRouter from './routers/products';
import userRouter from './routers/users';

const app = express();

app.use(express.json());

app
  .use('/products', productsRouter)
  .use('/users', userRouter);

app.use(errorMiddleware);
export default app;
