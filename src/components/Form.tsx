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
          type="email"
          margin="normal"
          error={true}
          helperText="Incorrect Email."
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
          margin="normal"
          error={true}
          helperText="Incorrect Password."
        />

        <Button variant="contained" fullWidth onClick={(e) => onFormSubmit()}>
          Submit
        </Button>
      </Box>
    </form>
  );
};
