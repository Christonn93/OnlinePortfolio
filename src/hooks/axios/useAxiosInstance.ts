import axios from "axios";

export const useAxiosInstance = () => {
 const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
   "Content-Type": "application/json",
  },
 });
 return axiosInstance;
};
