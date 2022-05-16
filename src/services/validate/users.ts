import Joi from 'joi';
import User from '../../types/user.types';
import ErrorMessageJoi from '../../utils/errorMessageJoi';

const schema = Joi.object<User>({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateFields = (user: User) => {
  const { error } = schema.validate(user);

  if (error) ErrorMessageJoi(error);
};

export default validateFields;