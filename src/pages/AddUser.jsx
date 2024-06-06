import { useNavigate } from "react-router-dom"
import { Formulario } from "../components/Formulario"
import { GoBack } from "../components/GoBack"
import { useAddNewUser } from "../hooks/useAddNewUser"


export const AddUser = () => {
  const navigate = useNavigate()

  const {mutate: addNewUser, isLoading, isError, error} = useAddNewUser()
  if(isLoading) return <h1>Loading</h1>
  if(isError) return <h1>{error.message}</h1>

  const handleAddUser = (user) => {
    addNewUser(user)
    navigate("/tableUser")
  }
  return (
    <>
    <GoBack/>
    <Formulario title="Add new User" button="Submit" onSubmit={handleAddUser} initialValue={{}}/>
    </>
  )
}
