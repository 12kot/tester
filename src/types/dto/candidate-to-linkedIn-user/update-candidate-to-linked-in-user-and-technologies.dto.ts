import { CandidateToLinkedInUser } from "types/enums";

export interface IUpdateCandidateToLinkedInUserAndTechnologiesDto {
  candidateId: number;
  linkedInUserId: string;
  status?: CandidateToLinkedInUser;
}
