import axios from "axios"
import { useQuery } from "react-query"

const fetchApiById = (id)=>{
    return axios.get(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${id}`)
      
    
}



export const useFetchUserById = (id) => {

   return useQuery(["user", id], ()=>fetchApiById(id))
  
   
}
