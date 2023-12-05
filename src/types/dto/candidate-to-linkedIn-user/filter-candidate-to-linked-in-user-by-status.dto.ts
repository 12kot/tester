import { CandidateToLinkedInUser } from "types/enums";

export interface IFilterCandidateToLinkedInUserByStatusDto {
  status: CandidateToLinkedInUser;
  linkedInUserId: string;
}
