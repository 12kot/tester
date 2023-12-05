import {
  ICandidate,
  ICreateCandidateDto,
  IFilterCandidateByIdsDto,
  IFilterCandidateByLinkedInIdsDto,
  IFilterCandidatesCountDto,
  IFilterCandidatesDto,
  IUpdateCandidateDto,
} from "../types";
import {
  AxiosDelete,
  AxiosGet,
  AxiosPatch,
  AxiosPost,
} from "./axios/axios.api";

const ENDPOINT_NAME = "candidates";

export const CreateCandidate = async (data: ICreateCandidateDto) => {
  return await AxiosPost<ICandidate>(
    `/${ENDPOINT_NAME}/create`,
    data
  );
};

export const UpdateCandidate = async (
  id: number,
  data: IUpdateCandidateDto
) => {
  return await AxiosPatch<any>(
    `/${ENDPOINT_NAME}/id/${id}`,
    data
  );
};

export const UpdateCandidateByLinkedInId = async (
  linkedInId: string,
  data: IUpdateCandidateDto
) => {
  return await AxiosPatch<any>(
    `/${ENDPOINT_NAME}/linkedInId/${linkedInId}`,
    data
  );
};

export const GetCandidateById = async (id: number) => {
  return await AxiosGet<ICandidate>(
    `/${ENDPOINT_NAME}/id/${id}`
  );
};

export const GetCandidateByIds = async (data: IFilterCandidateByIdsDto) => {
  return await AxiosPost<ICandidate[]>(
    `/${ENDPOINT_NAME}/filterByIds`,
    data
  );
};

export const GetCandidateByLinkedInIds = async (
  data: IFilterCandidateByLinkedInIdsDto
) => {
  return await AxiosPost<ICandidate[]>(
    `/${ENDPOINT_NAME}/filterByLinkedInIds`,
    data
  );
};

export const GetCandidateByLinkedInId = async (linkedInId: string) => {
  return await AxiosGet<ICandidate>(
    `/${ENDPOINT_NAME}/linkedInId/${linkedInId}`
  );
};

export const DeleteCandidate = async (id: number) => {
  return await AxiosDelete<any>(
    `/${ENDPOINT_NAME}/id/${id}`
  );
};

export const GetCandidates = async (
  joinTechnologies: boolean,
  data: IFilterCandidatesDto
) => {
  return await AxiosPost<ICandidate[]>(
    `/${ENDPOINT_NAME}?joinTechnologies=${joinTechnologies}`,
    data
  );
};

export const GetCandidatesCount = async (data: IFilterCandidatesCountDto) => {
  return await AxiosPost<number>(
    `/${ENDPOINT_NAME}/count`,
    data
  );
};

export const PushCandidatesToDb = async () => {
  return await AxiosGet<string>(
    `/${ENDPOINT_NAME}/push`
  );
};
