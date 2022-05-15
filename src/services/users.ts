import User, { Credential } from '../types/user.types';
import connection from '../models/connection';
import UsersModel from '../models/users';
import createTokenJWT from '../utils/createToken';

class UserService {
  private model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<Credential> {
    const { username, classe, level, password } = user;

    await this.model.create({ username, classe, level, password });

    return createTokenJWT({ username, classe, level });
  }
}

export default UserService;