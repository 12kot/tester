import { CandidateToTechnology } from "../enums";
import { ICandidate } from "./candidate.interface";
import { ITechnology } from "./technology.interface";

export interface ICandidateToTechnology {
  candidateId: number;
  technologyId: number;
  month?: number;
  shortNote?: string;
  candidateStatus?: CandidateToTechnology;

  //rwlations
  candidate?: ICandidate;
  technology?: ITechnology;
}
