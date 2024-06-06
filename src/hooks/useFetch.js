import axios from "axios";
import { useQuery } from "react-query";

const fetchApiJson = () => {
  return axios.get("https://api-spartan-143a3bbd2958.herokuapp.com/users");
};

export const useFetch = () => {
  const { data, isLoading, isError } = useQuery("users", fetchApiJson);

  // console.log("ESTE ES LA DATA", data);

  return {
    data,
    isLoading,
    isError,
  };
};
