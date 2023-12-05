export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  refreshToken?: string;
}

export interface ICreateUser {
  accessToken: string;
  refreshToken: string;
}

export interface IJwtAccessPayload {
  sub: number;
}

export interface IJwtRefreshPayload {
  sub: number;
  refreshToken: string;
}
