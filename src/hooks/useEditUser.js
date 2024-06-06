import axios from "axios"
import { useMutation, useQueryClient } from "react-query";

const modifyUser = (user)=>{
    return axios.put(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${user.id}`, user)
}



export const useEditUser = () => {
    const queryClient = useQueryClient()
    return useMutation(modifyUser,{
        onSuccess: () =>{
            queryClient.invalidateQueries("users")
        },
        onError: (error)=>{
            console.log(error);
            
        },
        onSettled: ()=> {},
    })
}
