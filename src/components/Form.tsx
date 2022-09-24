import { Box, Button, TextField } from "@mui/material";
import { FormEvent } from "react";

export const Form = () => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.target);
  };

  return (
    <form onSubmit={onFormSubmit}>
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

        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </form>
  );
};
