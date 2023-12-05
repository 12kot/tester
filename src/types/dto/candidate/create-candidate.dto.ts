import { Regions } from "types/enums";

export interface ICreateCandidateDto {
  imageUrl?: string;
  linkedInId?: string;
  region: Regions;
  title: string;
  name: string;
  dataVersion?: number;
  openToWorkFrom?: number;
  notes?: string;
  shortNotes?: string;
  fullExperience?: string;
  englishLevel?: string;
  salary?: string;
  nationality?: string;
  telegram?: string;
  workReadyDate?: number;
  whyLeave?: string;
}
