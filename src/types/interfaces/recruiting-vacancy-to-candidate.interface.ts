import { ICandidate } from "./candidate.interface";
import { IRecruitingVacancy } from "./recruiting-vacancy.interface";

export interface IRecruitingVacancyToCandidate {
  candidateId: number;
  recruitingVacancyId: number;
  candidateStatus?: string;
  shortNote?: string;

  //relations
  recruitingVacancy?: IRecruitingVacancy;
  candidate?: ICandidate;
}
