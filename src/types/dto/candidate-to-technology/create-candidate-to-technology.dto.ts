import { CandidateToTechnology } from "../../enums";

export interface ICreateCandidateToTechnologyDto {
  candidateId: number;
  technologyId: number;
  month?: number;
  shortNote?: string;
  candidateStatus?: CandidateToTechnology;
}
