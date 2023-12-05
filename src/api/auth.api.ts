import {
  IAuthDto,
  ICreateUser,
  IJwtAccessPayload,
  IJwtRefreshPayload,
} from "types";
import { ICreateUserDto } from "types/dto/user";
import { AxiosPatch, AxiosPost } from "./axios/axios.api";

export const AuthSignup = async (
  data: ICreateUserDto
): Promise<ICreateUser | null> => {
  return await AxiosPost<ICreateUser>(
    `${process.env.SERVER_PATH}/auth/signup`,
    data
  );
};

export const AuthSignin = async (data: IAuthDto) => {
  return await AxiosPost<ICreateUser>(
    `${process.env.SERVER_PATH}/auth/signin`,
    data
  );
};

export const AuthLogout = async (data: IJwtAccessPayload) => {
  return await AxiosPatch<any>(`${process.env.SERVER_PATH}/auth/logout`, data);
};

export const AuthRefreshToken = async (data: IJwtRefreshPayload) => {
  return await AxiosPatch<ICreateUser>(
    `${process.env.SERVER_PATH}/auth/logout`,
    data
  );
};
