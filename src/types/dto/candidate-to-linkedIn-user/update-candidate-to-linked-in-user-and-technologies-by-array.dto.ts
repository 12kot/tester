import { CandidateToLinkedInUser } from "../../enums";

export interface IUpdateCandidateToLinkedInUserAndTechnologiesByArrayDto {
  candidateIds: number[];
  linkedInUserId: string;
  status?: CandidateToLinkedInUser;
}
