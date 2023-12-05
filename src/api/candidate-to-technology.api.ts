import { CandidateToTechnology } from "types";
import {
  AxiosDelete,
  AxiosPatch,
  AxiosPost,
} from "./axios/axios.api";
import { ICreateCandidateToTechnologyDto, IDeleteCandidateToTechnologyDto, IFilterCandidateToTechnologyByIdsDto, IUpdateCandidateToTechnologyDto } from "types/dto/candidate-to-technology";

const ENDPOINT_NAME = "candidate-to-technology";

export const CreateCandidateToTechnologyRelations = async (
  data: ICreateCandidateToTechnologyDto
) => {
  return await AxiosPost<CandidateToTechnology>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/create`,
    data
  );
};

export const GetCandidateToTechnologyByIds = async (
  data: IFilterCandidateToTechnologyByIdsDto
) => {
  return await AxiosPost<CandidateToTechnology[]>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}/filterByIds`,
    data
  );
};

export const UpdateCandidateToTechnologyByIds = async (
  data: IUpdateCandidateToTechnologyDto
) => {
  return await AxiosPatch<any>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}`,
    data
  );
};

export const deleteCandidateToTechnologyRelation = async (
  data: IDeleteCandidateToTechnologyDto
) => {
  return await AxiosDelete<any>(
    `${process.env.SERVER_PATH}/${ENDPOINT_NAME}`,
    data
  );
};
