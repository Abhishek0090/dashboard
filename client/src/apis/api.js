import { _get } from "../lib/axios";

export const getAllData = (url) => {
  return _get(url);
};
