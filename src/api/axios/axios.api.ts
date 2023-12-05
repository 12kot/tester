import axios from "axios";

// export const instance = axios.create({
//   baseURL: process.env.SERVER_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const ServerUrl = process.env.SERVER_URL;

export const AxiosGet = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    console.log("response", ServerUrl);
    const response = await axios.get(path, data);
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const AxiosPost = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    const response = await axios.post(path, data);
    return response.data;
  } catch {
    return null;
  }
};

export const AxiosPatch = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    const response = await axios.patch(path, data);
    return response.data;
  } catch {
    return null;
  }
};

export const AxiosDelete = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    const response = await axios.delete(path, data);
    return response.data;
  } catch {
    return null;
  }
};
