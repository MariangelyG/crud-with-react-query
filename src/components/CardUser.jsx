import { Box, Card, CardContent, Typography } from "@mui/material";

export const CardUser = ({ user }) => {
  // console.log(user)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100vw",
      }}
    >
      <Card
        sx={{
          width: "35%",
          height: "35%",
          textAlign: "center",
          border: "solid, 1px, #C6FD01",
          padding: 3,
          borderRadius: 10 ,
          backgroundColor: "#263137",
          color:"white",
        }}
      >
        <Typography variant="h3">
          <b>User Details</b>
        </Typography>
        <CardContent  sx={{
        //aplica estilo a todos los hijos directos del contenedor, (typography)
            "& > *": {
              mb: 0,
            },
          }}>
          <Typography variant="h5" >
            <b>Name: </b>
            {user?.name}
          </Typography>
          <Typography variant="h5" >
            <b>Username:</b> {user?.username}
          </Typography>
          <Typography variant="h5" >
            <b>Email:</b> {user?.email}
          </Typography>
          <Typography variant="h5" >
            <b>Gender:</b> {user?.city}
          </Typography>
          <Typography variant="h5" >
            <b>Website:</b> {user?.website}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
