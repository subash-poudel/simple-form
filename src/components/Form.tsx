import { Box, Button, TextField } from "@mui/material";
import { useFormStore } from "../stores/useFormStore";

export const Form = () => {
  const data = useFormStore();
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
          value={data.username}
          onChange={(e) => data.setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          margin="normal"
          value={data.password}
          onChange={(e) => data.setPassword(e.target.value)}
        />

        <Button variant="contained" fullWidth onClick={(e) => onFormSubmit()}>
          Submit
        </Button>
      </Box>
    </form>
  );
};
