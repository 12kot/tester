import { ILinkedInUser } from "../types";
import {
  AxiosDelete,
  AxiosGet,
  AxiosPatch,
  AxiosPost,
} from "./axios/axios.api";
import {
  ICreateLinkedInUserDto,
  IUpdateLinkedInUserDto,
} from "../types/dto/linkedIn-user";

const ENDPOINT_NAME = "linked-in-user";

export const CreateLinkedInUser = async (data: ICreateLinkedInUserDto) => {
  return await AxiosPost<ILinkedInUser>(
    `}/${ENDPOINT_NAME}/create`,
    data
  );
};

export const UpdateLinkedInUser = async (
  id: string,
  data: IUpdateLinkedInUserDto
) => {
  return await AxiosPatch<any>(
    `}/${ENDPOINT_NAME}/id/${id}`,
    data
  );
};

export const GetLinkedInUserById = async (id: string) => {
  return await AxiosGet<ILinkedInUser>(
    `}/${ENDPOINT_NAME}/id/${id}`
  );
};

export const DeleteLinkedInUser = async (id: string) => {
  return await AxiosDelete<any>(
    `}/${ENDPOINT_NAME}/id/${id}`
  );
};

// export const GetLinkedInUsers = async (data: IFilterLinkedInUsersDto) => {
//   return await AxiosGet<any>(
//     `}/${ENDPOINT_NAME}`,
//     data
//   );
// };
