import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login';
import Login from '../types/login.types';

class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response): Promise<Response | void> => {
    const { username, password } = req.body as Login;

    const result = await this.loginService.login({ username, password });

    res.status(StatusCodes.OK).json(result);
  };
}

export default LoginController;
