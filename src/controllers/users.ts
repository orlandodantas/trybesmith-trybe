import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users';
import User from '../types/user.types';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body as User;
    const user = await this.userService.create({ username, classe, level, password });

    res.status(StatusCodes.CREATED).json(user);
  };
}

export default UserController;