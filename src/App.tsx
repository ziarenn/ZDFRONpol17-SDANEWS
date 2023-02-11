import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm/CustomerForm";

function App() {
  const [x, setX] = useState();

  return (
    <div className="App">
      {/* {x ? <span>X</span> : null} */}
      {/* {x && <span>X</span>} */}
      <BrowserRouter>
        {/* STATIC */}
        <Navbar />
        <Routes>
          {/* DYNAMIC */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/customer" element={<CustomerForm />} />
        </Routes>
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

// 1. useEffect
// 2. axios
// 3. Renderowanie warunkowe
// 4. Renderowanie w pętli
// 5. useForm
// 6. Routing
