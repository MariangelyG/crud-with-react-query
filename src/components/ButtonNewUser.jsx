import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ButtonNewUser = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/addUser");
  };

  return (
    <Button onClick={handleNavigate} variant="contained" color="success" sx={{mb:3, borderRadius: 5, mt:1}}>
      Add New User
    </Button>
  );
};
