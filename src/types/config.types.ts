type Config = {
  DB: { 
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
  },
  JWT: {
    secret: string;
    header: {
      expiresIn: string,
    }
  },
};

export default Config;