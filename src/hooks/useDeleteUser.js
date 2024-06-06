import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useDeleteUser = () => {
  const deleteUser = (id) =>{
    // console.log(id);
    
      return axios.delete(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${id}`)
  }


    const queryClient = useQueryClient()

  return useMutation(deleteUser, {
    onSuccess: () =>{
        queryClient.invalidateQueries("users")
    }
  })
}
