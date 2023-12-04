import { ECandidateStatus } from "types/enums/candidate-statuses";

export interface ICandidateToLinkedInUser {
  candidateId: number;
  linkedInUserId: string;
  status: ECandidateStatus;
  //linkedInUser: LinkedInUser;
  //candidate: Candidate;
}
