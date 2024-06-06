
import { useParams } from 'react-router-dom'
import { TableUsers } from '../components/TableUsers'
import { useDeleteUser } from '../hooks/useDeleteUser'

export const TableUserPage = () => {


  return (
    <TableUsers/>
  )
}
