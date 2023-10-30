import axios from "axios";

const request = axios.create({
  baseURL: "http://squadron-dev.ap-southeast-2.elasticbeanstalk.com/api",
  timeout: 50000,
});

request.interceptors.request.use(
  (config) => {
    const token = axios.defaults.headers.common["Authorization"];
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  firstName: string;
  lastName: string;
}

export const loginAPI = async ({ email, password }: LoginData) => {
  const response = await request.post(
    `/User/Login?username=${email}&password=${password}`
  );
  return response.data;
};

export const registerAPI = async ({
  email,
  password,
  firstName,
  lastName,
}: RegisterData) => {
  const response = await request.post("/register", {
    emailAddress: email,
    password,
    firstName,
    lastName,
  });
  return response.data;
};
