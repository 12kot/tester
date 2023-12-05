import { ICandidateToLinkedInUser } from "types";
import {
  AxiosDelete,
  AxiosPost,
} from "./axios/axios.api";
import {
  ICreateCandidateToLinkedInUserDto,
  IFilterCandidateToLinkedInUserByIdsDto,
  IFilterCandidateToLinkedInUserByStatusDto,
  IUpdateCandidateToLinkedInUserAndTechnologiesByArrayDto,
  IUpdateCandidateToLinkedInUserAndTechnologiesDto,
} from "types/dto/candidate-to-linkedIn-user";

const ENDPOINT_NAME = "candidate-to-linked-in-user";

export const CreateCandidateToLinkedinUserRelation = async (
  data: ICreateCandidateToLinkedInUserDto
) => {
  return await AxiosPost<ICandidateToLinkedInUser>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/create`,
    data
  );
};

export const UpdateCandidateToLinkedInUserAndTechnologiesRelation = async (
  data: IUpdateCandidateToLinkedInUserAndTechnologiesDto
) => {
  return await AxiosPost<ICandidateToLinkedInUser>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/update`,
    data
  );
};

export const UpdateCandidateToLinkedInUserAndTechnologiesByArrayRelation =
  async (data: IUpdateCandidateToLinkedInUserAndTechnologiesByArrayDto) => {
    return await AxiosPost<ICandidateToLinkedInUser[]>(
      `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/updateByArray`,
      data
    );
  };

export const CreateCandidateToLinkedInUsersByArrayRelation = async (
  data: ICreateCandidateToLinkedInUserDto
) => {
  return await AxiosPost<ICandidateToLinkedInUser[]>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/createByArray`,
    data
  );
};

export const GetCandidateToLinkedinUserByIds = async (
  data: IFilterCandidateToLinkedInUserByIdsDto
) => {
  return await AxiosPost<ICandidateToLinkedInUser[]>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/filterByIds`,
    data
  );
};

export const GetCandidateToLinkedinUserByStatus = async (
  data: IFilterCandidateToLinkedInUserByStatusDto
) => {
  return await AxiosPost<ICandidateToLinkedInUser[]>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/filterByStatus`,
    data
  );
};

export const DeleteCandidateToLinkedInUser = async (id: number) => {
  return await AxiosDelete<any>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/candidateId/${id}`
  );
};
