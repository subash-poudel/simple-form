import { Grid } from "@mui/material";
import { Form } from "./Form";
import { Success } from "./Success";

export const PageLayout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Form />
          <Success />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};
