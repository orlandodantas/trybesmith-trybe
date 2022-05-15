import { Router } from 'express';
import LoginController from '../controllers/login';
import loginValidate from '../middlewares/loginValidate';

const route = Router();
const loginController = new LoginController();

route
  .post('/', loginValidate, loginController.login);

export default route;