import { ICandidateToTechnology } from "./candidate-to-technology.interface";
import { ILinkedInUser } from "./linkedIn-user.interface";

export interface ITechnology {
  id: number;
  name: string;
  responsibleLinkedInUserId?: string;

  //relations
  candidateToTechnologies?: ICandidateToTechnology[];
  linkedInUser?: ILinkedInUser;
}
