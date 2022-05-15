type User = {
  id?: number;
  username: string,
  classe: string,
  level: number,
  password: string
};

export type Payload = {
  username: string,
  classe: string,
  level: number,
};

export type Credential = {
  token: string
};

export default User;