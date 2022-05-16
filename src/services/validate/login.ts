import Joi from 'joi';
import Login from '../../types/login.types';
import ErrorMessageJoi from '../../utils/errorMessageJoi';

const schema = Joi.object<Login>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateFields = (login: Login) => {
  const { error } = schema.validate(login);

  if (error) ErrorMessageJoi(error);
};

export default validateFields;