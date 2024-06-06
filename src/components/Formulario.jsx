import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Formulario = ({
  title,
  button,
  onSubmit,
  initialValue,

}) => {
  const [user, setUser] = useState({
    name: initialValue?.name || "",
    username: initialValue?.username || "",
    email: initialValue?.email || "",
    city: initialValue?.city || "",
    website: initialValue?.website || "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    navigate("/tableUser");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "20%",
            bgcolor: "white",
            borderRadius: 5,
            padding: "30px",
            border: "double, 5px,  green",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {title}
          </Typography>
          <Box
            component="form"
            onChange={handleInputChange}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              value={user.name}
              onChange={handleInputChange}
            />
            <TextField
              name="username"
              type="text"
              label="Username"
              variant="outlined"
              value={user.username}
              onChange={handleInputChange}
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              name="city"
              label="Gender"
              variant="outlined"
              value={user.city}
              onChange={handleInputChange}
            />
            
            
            <TextField
              type="text"
              name="website"
              label="Website"
              variant="outlined"
              value={user.website}
              onChange={handleInputChange}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                border: "solid, 2px, #C6FD01",
                 backgroundColor:"green", ":hover": { backgroundColor:"green" }
              }}
            >
              {button}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
