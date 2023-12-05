import { IRecruitingVacancy, IRecruitingVacancyToCandidate } from "types";
import {
  AxiosDelete,
  AxiosGet,
  AxiosPatch,
  AxiosPost,
} from "./axios/axios.api";
import {
  ICreateRecruitingVacancyToCandidateDto,
  IFilterRecruitingVacancyToCandidateByIdsDto,
  IUpdateRecruitingVacancyToCandidateDto,
} from "types/dto/recruiting-vacancy-to-candidate";

const ENDPOINT_NAME = "recruiting-vacancy-to-candidate";

export const CreateVacancyToCandidateRelation = async (
  data: ICreateRecruitingVacancyToCandidateDto
) => {
  return await AxiosPost<IRecruitingVacancyToCandidate>(
    `/${ENDPOINT_NAME}/create`,
    data
  );
};

export const GetVacancyToCandidateRelationByIds = async (
  data: IFilterRecruitingVacancyToCandidateByIdsDto
) => {
  return await AxiosGet<IRecruitingVacancyToCandidate[]>(
    `/${ENDPOINT_NAME}/filterByIds`,
    data
  );
};

export const UpdateVacancyToCandidateRelationByIds = async (
  data: IUpdateRecruitingVacancyToCandidateDto
) => {
  return await AxiosPatch<any>(
    `/${ENDPOINT_NAME}`,
    data
  );
};

export const DeleteVacancyToCandidateRelation = async (id: number) => {
  return await AxiosDelete<any>(
    `/${ENDPOINT_NAME}/vacancyId/${id}`
  );
};
