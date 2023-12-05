import { Regions } from "types/enums";
import { ICandidateToTechnology } from "./candidate-to-technology.interface";
import { ICandidateToLinkedInUser } from "./candidate-to-linkedIn-user.interface";
import { IRecruitingVacancyToCandidate } from "./recruiting-vacancy-to-candidate.interface";

export interface ICandidate {
  id: number;
  imageUrl?: string;
  linkedInId?: string;
  creationDate?: number;
  region: Regions;
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
  candidateToTechnologies?: ICandidateToTechnology[];
  candidateToLinkedInUsers?: ICandidateToLinkedInUser[];
  recruitingVacancyToCandidates?: IRecruitingVacancyToCandidate[];
}
