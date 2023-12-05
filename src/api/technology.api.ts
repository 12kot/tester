import { ITechnology } from "types";
import {
  AxiosGet,
} from "./axios/axios.api";

const ENDPOINT_NAME = "technology";

export const GetTechnologyByName = async (name: string) => {
  return await AxiosGet<ITechnology>(`/${ENDPOINT_NAME}/name/${name}`);
};
