import { ECandidateStatus } from "types/enums/candidate-statuses";

export interface ICandidateToTechnology {
  candidateId: number;
  technologyId: number;
  month?: number;
  shortNote?: string;
  candidateStatus?: ECandidateStatus;
  //candidate: ICandidate;
  //technology: Technology;
}
