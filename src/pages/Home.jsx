import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToTable = () => {
    navigate("/tableUser");
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://i.pinimg.com/736x/5a/ab/e2/5aabe2bb39692ecb3a95abf68fb90522.jpg"
          alt="image crud"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={goToTable}
          variant="contained"
          sx={{ mt: 2, bgcolor: "green", ":hover": { bgcolor: "#84AA17" } }}
        >
          Clickme
        </Button>
      </Box>
    </>
  );
};
