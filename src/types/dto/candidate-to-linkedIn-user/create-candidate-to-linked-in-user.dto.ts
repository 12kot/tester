import { CandidateToLinkedInUser } from "../../enums";

export interface ICreateCandidateToLinkedInUserDto {
  candidateId: number;
  linkedInUserId: string;
  status: CandidateToLinkedInUser;
}
