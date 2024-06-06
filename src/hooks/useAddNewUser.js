import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addNewUser = ((user) => {
  return axios.post("https://api-spartan-143a3bbd2958.herokuapp.com/users", user);
});

export const useAddNewUser = () => {
 const queryClient = useQueryClient()
  return useMutation(addNewUser, {
    onSuccess: ()=>{
      queryClient.invalidateQueries("users")
    }
  })
};