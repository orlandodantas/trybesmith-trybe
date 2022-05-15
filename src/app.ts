import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productsRouter from './routers/products';
import usersRouter from './routers/users';
import ordersRouter from './routers/orders';
import loginRouter from './routers/login';

const app = express();

app.use(express.json());

app
  .use('/products', productsRouter)
  .use('/users', usersRouter)
  .use('/orders', ordersRouter)
  .use('/login', loginRouter);

app.use(errorMiddleware);
export default app;
