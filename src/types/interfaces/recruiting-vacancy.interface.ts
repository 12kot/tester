import { IRecruitingVacancyToCandidate } from "./recruiting-vacancy-to-candidate.interface";
import { ILinkedInUser } from "./linkedIn-user.interface";
import { RecruitingVacancyStatus } from "../enums";

export interface IRecruitingVacancy {
  id: number;
  dateStart: number;
  name: string;
  description?: string;
  responsibleLinkedInUserId?: string;
  status: RecruitingVacancyStatus;

  //relations
  recruitingVacancyToCandidates?: IRecruitingVacancyToCandidate[];
  linkedInUser?: ILinkedInUser;
}
