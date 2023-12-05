import { CandidateToLinkedInUser } from "types/enums";

export interface ICreateCandidateToLinkedInUserDto {
  candidateId: number;
  linkedInUserId: string;
  status: CandidateToLinkedInUser;
}
