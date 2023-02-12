import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../helpers/firebaseConfig";
import { uploadBytes, ref } from "firebase/storage";

interface ProfilePhotoFormValues {
  profilePhoto: FileList;
}

const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormValues>();

  const uploadPhoto = (data: ProfilePhotoFormValues) => {
    // 1. Stwórz zmienną photo, przypisz do niej OBIEKT reprezuntający sam plik (znajdziesz go gdzieś w obiekcie data z parametru).
    const photo = data.profilePhoto[0];
    // 2. Napisz ifa w którym sprawdzisz czy auth.currentUser istnieje, zaimportuj auth z firebaseConfig.ts
    if (auth.currentUser) {
      // WSZYSTKO PONIŻEJ W IFIE
      // 3. Stwórz referencje do storagu, użyj do tego funkcji ref z firebase/storage. `/users/${auth.currentUser.uid}/profile`
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
      // 4. Wywołanie funkcji uploadBytes (firebase/storage), pierwszy argument: ref z pkt 3, drugi argument: zmienna photo z pkt 1. Do wywołania przypnij thena, w którym będzie console.log('sukces')
      uploadBytes(storageRef, photo)
        .then(() => console.log("sukces"))
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
            Select a file
          </Typography>
          <input
            type="file"
            hidden
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Upload
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;
