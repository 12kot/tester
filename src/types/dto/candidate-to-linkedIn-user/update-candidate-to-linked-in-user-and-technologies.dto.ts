import { CandidateToLinkedInUser } from "../../enums";

export interface IUpdateCandidateToLinkedInUserAndTechnologiesDto {
  candidateId: number;
  linkedInUserId: string;
  status?: CandidateToLinkedInUser;
}
