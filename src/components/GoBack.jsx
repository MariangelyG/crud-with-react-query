import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const GoBack = () => {
    
    const navigate = useNavigate()
    const handleToBack = ()=>{
        navigate("/tableUser")
      }
  return (
    <Button onClick={handleToBack}>
    <ArrowBackIcon sx={{color:"#C6FD01"}}/>
  </Button>
  )
}
