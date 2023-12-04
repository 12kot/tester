import { ERegions } from "types/enums/regions.enum";

export interface ICandidate {
  id: number;
  imageUrl?: string;
  linkedInId?: string;
  creationDate?: number;
  region: ERegions;
  title: string;

  // person info //
  name: string;
  dataVersion?: number;
  openToWorkFrom?: number;
  notes?: string;
  shortNotes?: string;

  // experience info //
  fullExperience?: string;
  englishLevel?: string;
  salary?: string;

  // nationality info //
  nationality?: string;

  // contact and 'about work' info
  telegram?: string;
  workReadyDate?: number;
  whyLeave?: string;

  // relations
  //candidateToTechnologies?: ICandidateToTechnology[];
  //candidateToLinkedInUsers: CandidateToLinkedInUser[];
  //recruitingVacancyToCandidates: RecruitingVacancyToCandidate[];
}
