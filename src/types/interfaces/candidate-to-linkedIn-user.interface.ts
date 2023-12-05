import { CandidateToLinkedInUser } from "../enums";
import { ILinkedInUser } from "./linkedIn-user.interface";
import { ICandidate } from "./candidate.interface";

export interface ICandidateToLinkedInUser {
  candidateId: number;
  linkedInUserId: string;
  status: CandidateToLinkedInUser;

  //relations
  linkedInUser?: ILinkedInUser;
  candidate?: ICandidate;
}
