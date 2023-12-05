import { CandidateToTechnology } from "types/enums";

export interface ICreateCandidateToTechnologyDto {
  candidateId: number;
  technologyId: number;
  month?: number;
  shortNote?: string;
  candidateStatus?: CandidateToTechnology;
}
