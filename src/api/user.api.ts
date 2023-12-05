import { ITechnology, IUser } from "../types";
import { AxiosDelete, AxiosGet, AxiosPatch } from "./axios/axios.api";
import { IUpdateUserDto } from "../types/dto/user";

const ENDPOINT_NAME = "user";

export const UpdateUser = async (id: number, data: IUpdateUserDto) => {
  return await AxiosPatch<any>(`/${ENDPOINT_NAME}/id/${id}`, data);
};

export const GetUserById = async (id: number) => {
  return await AxiosGet<IUser>(`/${ENDPOINT_NAME}/id/${id}`);
};

export const GetUserByName = async (name: string) => {
  return await AxiosGet<IUser>(`/${ENDPOINT_NAME}/name/${name}`);
};

export const DeleteUser = async (id: number) => {
  return await AxiosDelete<any>(`/${ENDPOINT_NAME}/id/${id}`);
};
