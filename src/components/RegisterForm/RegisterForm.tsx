import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const RegisterForm = () => {
  const inputStyles = { display: "block", mx: "auto", my: ".5rem" };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField type="email" placeholder="email" sx={inputStyles} />
      <TextField type="password" placeholder="password" sx={inputStyles} />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={inputStyles}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
