import { ICandidateToLinkedInUser } from "./candidate-to-linkedIn-user.interface";
import { IRecruitingVacancy } from "./recruiting-vacancy.interface";
import { ITechnology } from "./technology.interface";

export interface ILinkedInUser {
  id: string;
  name: string;

  //relations
  candidateToLinkedInUsers?: ICandidateToLinkedInUser[];
  technology?: ITechnology[];
  recruitingVacancy?: IRecruitingVacancy[];
}
