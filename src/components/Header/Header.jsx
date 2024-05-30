import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.webp";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import uz from "../../../public/images/uz.svg";
import ru from "../../../public/images/ru.svg";
import en from "../../../public/images/en.svg";
import { MdCheck } from "react-icons/md";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./header.css";
import Carousel from "../Carousel";

export default function Header({ setShowLogin }) {
  const [selectedLanguage, setSelectedLanguage] = useState(uz);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const dropdownMenu = document.getElementById("dropdownMenu");
      if (!event.target.closest("#dropdownButton")) {
        dropdownMenu.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleShowLogin = (e) => {
    setShowLogin(true);
    e.preventDefault();
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
    document.getElementById("dropdownMenu").classList.toggle("hidden");
  };

  const handleLanguageChange = (language, imageSrc) => (event) => {
    event.preventDefault();
    setSelectedLanguage(imageSrc);
    document.getElementById("dropdownMenu").classList.add("hidden");
  };

  return (
    <div>
      <nav className="mx-auto z-10 max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <div className="left__nav flex items-center gap-12">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>

          <ul className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Menyu
            </NavLink>
            <NavLink
              to="/branches"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Filiallar
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Biz haqimizda
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Bog'lanish
            </NavLink>
          </ul>
        </div>

        <div className="right__nav flex items-center space-x-6">
          <div className="flex items-center cursor-pointer">
            <FaLocationDot className="px-3 py-3 rounded-full bg-[#F1EFF4] box-border w-1/4 h-1/4" />
            <div className="flex flex-col ml-2 w-full">
              <p className="text-sm font-semibold w-56">
                Yetkazib berish yoki olib ketish
              </p>
              <h1 className="text-sm text-[#5164C0] font-semibold w-52">
                Qabul qilib olish turini tanlang
              </h1>
            </div>
          </div>

          <div className="relative z-10">
            <button
              id="dropdownButton"
              className="flex items-center text-gray-700 focus:outline-none border bg-[#F1EFF4] rounded-full px-3 py-2"
              onClick={handleDropdownClick}
            >
              <span id="selectedLanguage" className="mr-2 ">
                <img src={selectedLanguage} alt="Language" />
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownMenu"
              className="absolute right-0 mt-4 w-44 bg-white border border-gray-200 shadow-lg rounded hidden"
            >
              <a
                href="#"
                className="flex gap-4 px-4 py-2 items-center text-gray-700 hover:bg-gray-100"
                onClick={handleLanguageChange("UZ", uz)}
              >
                <img src={uz} alt="UZ" />
                O'zbekcha
                <MdCheck />
              </a>
              <a
                href="#"
                className="flex gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLanguageChange("RU", ru)}
              >
                <img src={ru} alt="RU" />
                Ruscha
              </a>
              <a
                href="#"
                className="flex gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLanguageChange("EN", en)}
              >
                <img src={en} alt="EN" />
                English
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <NavLink
              to="/cart"
              className="text-gray-700 flex items-center gap-4 hover:text-gray-900"
            >
              <ShoppingCartIcon className="rounded-full bg-[#F1EFF4] h-full" />
              <h1>2 000 so'm</h1>
            </NavLink>
            <NavLink onClick={handleShowLogin}>
              <PersonIcon className="rounded-full bg-[#F1EFF4] h-full" />
            </NavLink>
          </div>
        </div>
      </nav>

      <main>
        <Carousel />
      </main>
    </div>
  );
}
