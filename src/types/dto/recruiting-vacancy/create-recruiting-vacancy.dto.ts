import { RecruitingVacancyStatus } from "types/enums";

export interface ICreateRecruitingVacancyDto {
  dateStart: number;
  name: string;
  description?: string;
  responsibleLinkedInUserId?: string;
  status: RecruitingVacancyStatus;
}
