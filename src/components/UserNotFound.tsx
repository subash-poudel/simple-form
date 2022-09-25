import { Box, Typography } from "@mui/material";

export const UserNotFound = () => {
  return (
    <Box border={8} margin={8} padding={8} borderColor="teal" borderRadius={8}>
      <Typography variant="h4" component="h4" color="red">
        404
      </Typography>
      <Typography>User not found</Typography>
    </Box>
  );
};
