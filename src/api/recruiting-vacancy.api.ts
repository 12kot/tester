import { IRecruitingVacancy } from "types";
import {
  AxiosDelete,
  AxiosGet,
  AxiosPatch,
  AxiosPost,
} from "./axios/axios.api";
import {
  ICreateRecruitingVacancyDto,
  IUpdateRecruitingVacancyDto,
} from "types/dto/recruiting-vacancy";

const ENDPOINT_NAME = "recruiting-vacancy";

export const CreateVacancy = async (data: ICreateRecruitingVacancyDto) => {
  return await AxiosPost<IRecruitingVacancy>(
    `/${ENDPOINT_NAME}/create`,
    data
  );
};

export const UpdateVacancyById = async (
  id: number,
  data: IUpdateRecruitingVacancyDto
) => {
  return await AxiosPatch<any>(
    `/${ENDPOINT_NAME}/id${id}`,
    data
  );
};

export const GetVacancyById = async (id: number) => {
  return await AxiosGet<IRecruitingVacancy>(
    `/${ENDPOINT_NAME}/id${id}`
  );
};

export const DeleteVacancyById = async (id: number) => {
  return await AxiosDelete<any>(
    `/${ENDPOINT_NAME}/id${id}`
  );
};
