import { Route, Routes, useNavigate } from "react-router-dom"
import { AddUser } from "../pages/AddUser"
import { EditUser } from "../pages/EditUser"
import { ViewUser } from "../pages/ViewUser"
import { Home } from "../pages/Home";
import { TableUserPage } from "../pages/TableUserPage";
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";




export const AppRouter = () => {
  const navigate = useNavigate()
  const handleToHome= ()=>{
    navigate("/")
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/tableUser" element={<TableUserPage />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/viewUser/:id" element={<ViewUser />} />
      </Routes>
        <Button onClick={handleToHome} sx={{color:"green",  position: 'fixed', bottom: 16, left: 16}}><HomeIcon/></Button>
  
    
    </>
  );
};
