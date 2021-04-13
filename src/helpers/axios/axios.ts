import axios from "./axiosInstance";

type GetUsersType = {
  items: any;
  totalCount: number;
};

type GetProfileType = {};
type TryLoginType = {
  resultCode: number;
  messages: string[];
};

type GetMeType = {
  resultCode: number;
  data: {
    id: number;
    login: string;
  };
};
type LogOutType = {
  resultCode: number;
};

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
): Promise<TryLoginType> => {
  return axios
    .post<TryLoginType>("/auth/login", { email, password, rememberMe, captcha })
    .then((res) => res.data);
};

export const getMe = (): Promise<GetMeType> => {
  const endPoint = "/auth/me";

  return axios.get<GetMeType>(`${endPoint}`).then((res) => res.data);
};

export const logOut = ():Promise<LogOutType> => {
  const endPoint = "/auth/logout";

  return axios.post<LogOutType>(`${endPoint}`).then((res) => res.data);
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
