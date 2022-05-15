type User = {
  id?: number;
  username: string,
  classe: string,
  level: number,
  password: string
};

export type Payload = {
  id: number,
  username: string,
};

export type Credential = {
  token: string
};

export default User;