export type TLoginUser = {
  email: string;
  password: string;
};

export type TJWTPayload = {
  uid: string;
  email: string;
};
