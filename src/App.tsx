import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import { authContext } from "./helpers/authContext";
import UserPage from "./components/UserPage/UserPage";
/// CONTEXT API
// useContext (hook) jest częścią całego narzędzie Context API
// oprócz useContext mamy do dyspozycji funkcje createContext i komponent ContextProvider

// SETUP CONTEXT API
// 1. Stwórzenie contextu poprzez wywołanie funkcji createContext w osobnym pliku.
// 2. Obwinięcie danej części aplikacji (lub całej aplikacji) providerem.
// 3. Przekazanie danych do provider'a
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
      console.log("zalogowano");
    } else {
      setLoggedIn(false);
      console.log("wylogowano");
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          {/* STATIC */}
          <Navbar />
          <Routes>
            {/* DYNAMIC */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/customer" element={<CustomerForm />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          {/* STATIC */}
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 1. Stworz komponent SearchFrom.
// 2. Zaimportuj i wywołaj useForm
// 3. Stwórz interface do useForm, będzie tylko 1 input nazwany keyword, otypuj na string
// 4. W propsie przyjmij funkcję setKeyword, będzie to funkcja aktulizująca stan przyjmująca stringa. Pamiętaj i interfejsie do propsów.
// 5. Stwórz funkcję updateKeyword, funkcja przyjmuje obiekt data, wykorzystaj interface z pkt 3. W tej funkcji wywołuj funkcję setKeyword, stawiając do niej keyword z formularza.
// 6. JSX:
// - wszystko obwinięte tagiem form, skonfiguruj onSubmit, w style: display flex, flexDirectionColumn
// - TextField (MUI) placeholder keyword, sx: my .5rem, display block, mx auto. Zarejestruj pod nazwą keyword
// - Button (MUI) variant contained, type submit, sx: display block, mx auto
// (val: string) => void
