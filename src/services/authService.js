import axios from "../utils/axiosInstance";

export const registerUser = (data) => {
  return axios.post("/auth/register", data);
};

export const loginUser = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res.data; // { accessToken }
};


