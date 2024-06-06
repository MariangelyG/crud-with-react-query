import { useFetchUserById } from "../hooks/useFetchUserById"
import { CardUser } from "../components/CardUser"
import { useParams } from "react-router-dom"
import {GoBack } from "../components/GoBack"


export const ViewUser = () => {
 
  const {id} = useParams()
 
  const {data, isLoading, isError, error} = useFetchUserById(id)

  if(isLoading) return <h1>Loading</h1>
  if(isError) return <h1>{error.message}</h1>
 

 
  return (
    <>
      <GoBack />
      <CardUser user={data?.data}/>
    
    </>
  )
}
