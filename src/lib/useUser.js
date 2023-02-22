import { useQuery } from "react-query";
import { loginSuccess } from "../api";

export default function useUser() {
  const { isLoading, data } = useQuery(["loginSuccess"], loginSuccess, {
    retry: false,
  });

  return {
    userLoading: isLoading,
    isLoggedIn: data?.ok,
    user: data,
  };
}
