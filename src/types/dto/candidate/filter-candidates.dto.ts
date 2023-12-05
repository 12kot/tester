import { Regions } from "../../enums";
import { IFilterCandidateByTechnologyIdDto } from "./filter-candidate-by-technology-id.dto";

export interface IFilterCandidatesDto {
  regions?: Regions[];
  openToWork?: boolean;
  limit?: number;
  skip?: number;
  technology?: IFilterCandidateByTechnologyIdDto;
  linkedInIds?: string[];
}
