import { useParams } from "react-router-dom"
import { Formulario } from "../components/Formulario"
import { GoBack } from "../components/GoBack"
import { useEditUser } from "../hooks/useEditUser"
import { useFetchUserById } from "../hooks/useFetchUserById"



export const EditUser = () => {
  const {id} = useParams()
  const {data} = useFetchUserById(id)
  const {mutate: modifyUser} = useEditUser()

  const handleEditUser = (updateUser)=> {
    modifyUser({
      id,
      ...updateUser
    })
  }

  return (
    <>
    <GoBack/>
    <Formulario title="Edit user" button="add" onSubmit={handleEditUser} initialValue={data?.data}/>
    </>
  )
}
