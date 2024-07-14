import React, { useEffect, useState } from "react";
import { Button, Container, InputSearch } from "..";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/themeSlice";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showOverlay, setShowOverlay] = useState(false);
  const { status, data } = useSelector((state) => state.pokemonData);
  const isHomePage = !location.pathname.includes("/pokemon");

  if (status) {
    const pokemon = data?.find((user) => user.id == id);
    const theme = pokemon?.type[0];

    const headerColor = isHomePage
      ? useTheme("Home", "headercolor")
      : useTheme(theme, "headercolor");

    const buttonRColor = isHomePage
      ? useTheme("Home", "buttonRcolor")
      : useTheme(theme, "buttonRcolor");

    const buttonLColor = isHomePage
      ? useTheme("Home", "buttonLcolor")
      : useTheme(theme, "buttonLcolor");

    return (
      <header className={`sticky top-0 border-solid z-30 ${headerColor} `}>
        <Container>
          <nav className="p-8 flex flex-col gap-5 sm:flex-row items-center justify-between w-full  ">
            {/* Logo */}
            <h1
              className={` text-6xl cursor-pointer font-headingTop mt-2`}
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
                theme={theme}
              />
            </div>

            {/* Button Section */}
            <div className="ml-2 flex items-center justify-center w-fit-content">
              <Button ariaLabel="SignIn Button" className={`${buttonLColor} `}>
                SignIn
              </Button>
              <Button
                ariaLabel="Login Button"
                className={`ml-6 ${buttonRColor}`}
              >
                LogIn
              </Button>
            </div>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Header;
