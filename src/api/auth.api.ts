import {
  IAuthDto,
  ICreateUser,
  IJwtAccessPayload,
  IJwtRefreshPayload,
} from "../types";
import { ICreateUserDto } from "../types/dto/user";
import { AxiosPatch, AxiosPost } from "./axios/axios.api";

const ENDPOINT_NAME = "auth";

export const AuthSignup = async (
  data: ICreateUserDto
): Promise<ICreateUser | null> => {
  return await AxiosPost<ICreateUser>(
    `/${ENDPOINT_NAME}/signup`,
    data
  );
};

export const AuthSignin = async (data: IAuthDto) => {
  return await AxiosPost<ICreateUser>(
    `/${ENDPOINT_NAME}/signin`,
    data
  );
};

export const AuthLogout = async (data: IJwtAccessPayload) => {
  return await AxiosPatch<any>(`/${ENDPOINT_NAME}/logout`, data);
};

export const AuthRefreshToken = async (data: IJwtRefreshPayload) => {
  return await AxiosPatch<ICreateUser>(
    `/${ENDPOINT_NAME}/logout`,
    data
  );
};
