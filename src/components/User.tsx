import { Box, Typography } from "@mui/material";

export const User = () => {
  return (
    <Box border={8} margin={8} padding={8} borderColor="teal" borderRadius={8}>
      <Typography variant="h4" component="h4">
        Login Successful for
      </Typography>
      <Typography>Name: Sloth</Typography>
      <Typography>Email: sloth@gmail.com</Typography>
      <Typography>Designation: Officer</Typography>
    </Box>
  );
};
