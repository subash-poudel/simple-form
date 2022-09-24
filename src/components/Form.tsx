import { Box, Button, TextField } from "@mui/material";

export const Form = () => {
  const onFormSubmit = () => {
    console.log("on form submit");
  };

  return (
    <form>
      <Box>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          margin="normal"
        />

        <Button variant="contained" fullWidth onClick={e => onFormSubmit()}>
          Submit
        </Button>
      </Box>
    </form>
  );
};
