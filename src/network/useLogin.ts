import useSWR from "swr";
import { LOGIN } from "../constants/url";
import { User } from "../models/User";
import { fetcher } from "./loginFetcher";

export const useLogin = () => {
  const username = "sloth@gmail.com";
  const password = "securePW***";
  const request = {
    url: LOGIN,
    body: {
      username,
      password,
    },
  };

  const { data, error } = useSWR<User>(request, fetcher);
  const loading = !data && !error;

  return { loading, error, data };
};
