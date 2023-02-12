import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA6EFb-NuMvfsiURo2UrZJcJPrhKGuAjsE",
  authDomain: "zdfronpol17-sdanews.firebaseapp.com",
  projectId: "zdfronpol17-sdanews",
  storageBucket: "zdfronpol17-sdanews.appspot.com",
  messagingSenderId: "318808277194",
  appId: "1:318808277194:web:788d226d357a2dbfc1f433",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
