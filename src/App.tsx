import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;

// 1. Stwórz komponent LoginPage i wyświetl go w app.tsx
