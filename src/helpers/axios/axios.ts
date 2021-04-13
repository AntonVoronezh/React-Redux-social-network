import axios from "./axiosInstance";

type GetUsersType = {
  items: any;
  totalCount: number;
};

type GetProfileType = {};

export const getUsers = (
  page: number,
  count: number
): Promise<GetUsersType> => {
  const endPoint = "/users";
  let payload = "";

  if (page && count) {
    payload = `/?page=${page}&count=${count}`;
  } else if (page && !count) {
    payload = `/?page=${page}`;
  } else if (!page && count) {
    payload = `/?count=${count}`;
  } else {
    payload = "";
  }

  return axios
    .get<GetUsersType>(`${endPoint}${payload}`)
    .then((res) => res.data);
};

export const getProfile = (id: number): Promise<GetProfileType> => {
  const endPoint = "/profile";

  return axios.get<GetProfileType>(`${endPoint}/${id}`).then((res) => res.data);
};

export const tryLogin = (
  email: string,
  password: string,
  rememberMe: boolean = false,
  captcha: string | null = null
) => {
  return axios.post("/auth/login", { email, password, rememberMe, captcha });
};

export const getMe = () => {
  const endPoint = "/auth/me";

  return axios.get(`${endPoint}`);
};

export const logOut = () => {
  const endPoint = "/auth/logout";

  return axios.post(`${endPoint}`);
};

export const getCaptcha = () => {
  const endPoint = "/security/get-captcha-url";

  return axios.get(`${endPoint}`);
};

export const makeFollow = (id: number) => {
  const endPoint = "/follow";

  return axios.post(`${endPoint}/${id}`);
};

export const makeUnfollow = (id: number) => {
  const endPoint = "/follow";

  return axios.delete(`${endPoint}/${id}`);
};
