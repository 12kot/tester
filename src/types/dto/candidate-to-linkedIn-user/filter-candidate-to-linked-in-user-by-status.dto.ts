import { CandidateToLinkedInUser } from "../../enums";

export interface IFilterCandidateToLinkedInUserByStatusDto {
  status: CandidateToLinkedInUser;
  linkedInUserId: string;
}
