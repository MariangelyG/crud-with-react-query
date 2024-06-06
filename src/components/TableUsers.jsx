import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useFetch } from "../hooks/useFetch";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonNewUser } from "../components/ButtonNewUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "../hooks/useDeleteUser";

export const TableUsers = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleOpen = (id) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUserId(null);
  };

  const handleNavigateView = (id) => {
    navigate(`/viewUser/${id}`);
  };

  const handleNavigateEditUser = (id) => {
    navigate(`/editUser/${id}`);
  };

  const { mutate: deleteUser, isLoading, isError, error } = useDeleteUser();
  const { data, isLoading: loading, isError: err } = useFetch();

  if (isLoading || loading) return <h1>Loading...</h1>;
  if (isError|| err) return <h1>{error.message}</h1>;

  const handleDelete = (id) => {
    deleteUser(id);
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // borderRadius: "50px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#263137",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="white">
            DESEAS ELIMINAR EL USUARIO N° {selectedUserId}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-around", pt: 2}}>
            <Button
              onClick={() => handleDelete(selectedUserId)}
              variant="contained"
              sx={{
                backgroundColor: "red",
                ":hover": { backgroundColor: "red" },
                borderRadius: 5,
              }}
            >
              SI
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                backgroundColor: "green",
                ":hover": { backgroundColor: "green" },
                borderRadius: 5,
              }}
            >
              NO
            </Button>
          </Box>
        </Box>
      </Modal>
      <ButtonNewUser />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, backgroundColor:"#384c57"}} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>
                <Typography variant="h6" color="white">Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white">Username</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white">Email</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white">Gender</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white"> Website</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{color:"white"}}>
                  {user.name}
                </TableCell>
                <TableCell align="center" sx={{color:"white"}}>{user.username}</TableCell>
                <TableCell align="center" sx={{color:"white"}}>{user.email}</TableCell>
                <TableCell align="center" sx={{color:"white"}}>{user.city}</TableCell>
                <TableCell align="center" sx={{color:"white"}}>{user.website}</TableCell>
                <TableCell
                  sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleOpen(user.id)}
                    sx={{ borderRadius: 5 }}
                  >
                    <DeleteIcon />
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNavigateView(user.id)}
                    sx={{ borderRadius: 5 }}
                  >
                    <VisibilityIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleNavigateEditUser(user.id)}
                    sx={{ borderRadius: 5 }}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
