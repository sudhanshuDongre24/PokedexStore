import React, { useEffect, useState } from "react";
import { Button, Container, InputSearch } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/themeSlice";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const theme = useSelector((state) => state.pokemonTheme.theme);
  const isHomePage = location.pathname.includes("/pokemon");

  const headerColor = isHomePage
    ? useTheme(theme, "headercolor")
    : useTheme("Home", "headercolor");

  return (
    <header
      className={`sticky  top-0 border-solid border-b-[0.0625rem] z-30 ${headerColor} `}
    >
      <Container>
        <nav className="p-8 flex flex-col gap-5 sm:flex-row items-center justify-between w-full  ">
          {/* Logo */}
          <h1
            className={` text-5xl cursor-pointer font-extrabold`}
            onClick={() => navigate("/")}
          >
            Pokedex
          </h1>

          {showOverlay && (
            <div
              id="overlay"
              className="bg-[rgba(0,0,0,0.5)] top-0 w-full left-0 h-screen z-[5] fixed "
              onClick={() => setShowOverlay(false)}
            ></div>
          )}

          {/* Input field */}
          <div className="w-full mx-4 z-50">
            <InputSearch
              setShowOverlay={setShowOverlay}
              showOverlay={showOverlay}
            />
          </div>

          {/* Button Section */}
          <div className="ml-2 flex items-center justify-center w-fit-content">
            <Button
              ariaLabel="SignIn Button"
              className=" text-[#dddddd] hover:bg-black hover:text-white"
            >
              SignIn
            </Button>
            <Button
              ariaLabel="Login Button"
              className=" ml-6 bg-[rgb(221,221,221)] text-black hover:bg-[#1452e3] hover:text-white "
            >
              LogIn
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
