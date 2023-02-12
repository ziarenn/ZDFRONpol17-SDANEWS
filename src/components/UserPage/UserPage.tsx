import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { authContext } from "../../helpers/authContext";
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from "firebase/auth";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
const UserPage = () => {
  const loggedIn = useContext(authContext);

  return (
    <>
      {loggedIn && auth.currentUser && (
        <>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "2rem",
              my: "1rem",
              borderBottom: "1px solid #1976d2",
              pb: ".5rem",
            }}
          >
            Your profile
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontSize: "1rem", my: "1rem", mx: "auto" }}
          >
            Your email: {auth.currentUser.email}
          </Typography>
          <ProfilePhotoForm />
          <Button
            onClick={() => signOut(auth)}
            variant="outlined"
            sx={{ display: "block", mx: "auto", my: "1rem" }}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default UserPage;
