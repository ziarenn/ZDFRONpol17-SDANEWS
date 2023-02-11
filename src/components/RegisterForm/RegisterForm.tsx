import { Button, TextField, Typography } from "@mui/material";
// 1. Import useForm
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import React from "react";

// 4. Stworzenie interfejsu do formularza
// W tym interfejsie wypiszemy wszystkie wartości pobierane z formularza
interface RegisterFormValues {
  email: string;
  password: string;
  password2: string;
}
const RegisterForm = () => {
  // 2. Wywołanie useForm
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  // 5. Przypisanie intefejsu do wywołania useForm i funkcji do onSubmit (patrz góra/dół, RegisterFormValues)

  // 3. Stworzenie funkcji do onSubmit
  // Pod parametr data będą wpadały wszystkie dane z formularza w formie obiektu
  const registerUser = (data: RegisterFormValues) => {
    // if (data.password === data.password2) return;
    if (data.password === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          console.log("successfully created a user");
        })
        .catch((err) => console.error(err.message));
    } else {
      console.log("Password differ from each other");
    }

    console.log(data);
    // Sign up news users
  };

  const inputStyles = { display: "block", mx: "auto", my: ".5rem" };

  return (
    // 6. Wywołanie handleSubmit i przypisanie funkcji registerUser
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(registerUser)}
    >
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      {/* 7. Rejestracja inputów */}
      <TextField
        type="email"
        placeholder="email"
        sx={inputStyles}
        {...register("email", { required: true })}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={inputStyles}
        {...register("password", { required: true })}
      />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={inputStyles}
        {...register("password2", { required: true })}
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
