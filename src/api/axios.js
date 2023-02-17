import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tribally.xyz",
});

export default axiosInstance;
