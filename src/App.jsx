import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Cart from "./page/Cart/Cart";
import Contact from "./page/Contact/Contact";
import Filial from "./page/Filials/Filial";
import Header from "./components/Header/Header";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("+998 ");
  const [showLogin, setShowLogin] = useState(false);
  const numberRef = useRef(null);

  const handleCloseLogin = (e) => {
    setShowLogin(false);
    e.preventDefault();
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showLogin) {
      body.style.opacity = "0.7";
      document.body.classList.add("bg-gray-300");
    } else {
      body.style.opacity = "1";
      document.body.classList.remove("bg-gray-300");
    }
  }, [showLogin]);

  return (
    <>
      <Header setShowLogin={setShowLogin} />
      {showLogin && (
        <div
          id="register"
          className="registerr absolute top-[30%] bg-white border rounded-lg left-[37%] max-h-screen p-6 gap-4 flex flex-col"
        >
          <button onClick={handleCloseLogin} className="text-end">
            <CloseIcon />
          </button>
          <h2 className="text-4xl font-bold text-center">Tizimga kirish</h2>
          <h3 className=" text-lg text-gray-400 text-center">
            Telefon raqamingiz bilan tizimga kiring
          </h3>
          <label className="flex flex-col" htmlFor="number">
            Telefon raqam
            <input
              ref={numberRef}
              type="tel"
              name="number"
              id="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="border rounded-lg px-3 py-2"
            />
          </label>

          <button className="border py-2 rounded-3xl bg-gray-200 text-gray-400 font-semibold">
            Kodni yuborish
          </button>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches" element={<Filial />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
