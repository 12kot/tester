import { ERecruitingVacancyStatus } from "types/enums/recruit-vacancy-status";

export interface IRecruitingVacancy {
  id: number;
  dateStart: number;
  name: string;
  description?: string;
  responsibleLinkedInUserId?: string;
  status: ERecruitingVacancyStatus;
  //    recruitingVacancyToCandidates: RecruitingVacancyToCandidate [];
  //    linkedInUser: LinkedInUser;
}
