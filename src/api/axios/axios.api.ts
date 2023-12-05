import axios from "axios";

export const AxiosGet = async <T>(path: string): Promise<T | null> => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch {
    return null;
  }
};

export const AxiosPost = async <D, T>(
  path: string,
  data?: D
): Promise<T | null> => {
  try {
    const response = await axios.post(path, data);
    return response.data;
  } catch {
    return null;
  }
};

export const AxiosPatch = async <D, T>(
  path: string,
  data?: D
): Promise<T | null> => {
  try {
    const response = await axios.patch(path, data);
    return response.data;
  } catch {
    return null;
  }
};
