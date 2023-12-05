export interface ICreateRecruitingVacancyToCandidateDto {
  status: string;
  candidateId: number;
  candidateStatus?: string;
  shortNote?: string;
  recruitingVacancyId: number;
}
