import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export const AxiosGet = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    const response = await instance.get(path, data);
    return response.data;
  } catch {
    return null;
  }
};

export const AxiosPost = async <T>(
  path: string,
  data?: any
): Promise<T | null> => {
  try {
    const response = await instance.post(path, data);
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
    const response = await instance.patch(path, data);
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
    const response = await instance.delete(path, data);
    return response.data;
  } catch {
    return null;
  }
};
