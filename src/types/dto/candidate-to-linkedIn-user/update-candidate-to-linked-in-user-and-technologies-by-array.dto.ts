import { CandidateToLinkedInUser } from "types/enums";

export interface IUpdateCandidateToLinkedInUserAndTechnologiesByArrayDto {
  candidateIds: number[];
  linkedInUserId: string;
  status?: CandidateToLinkedInUser;
}
