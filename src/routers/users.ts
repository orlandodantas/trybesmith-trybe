import { Router } from 'express';
import UsersController from '../controllers/users';
import userValidate from '../middlewares/userValidate';

const route: Router = Router();

const userController = new UsersController();

route
  .post('/', userValidate, userController.create);

export default route;
