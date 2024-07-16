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
  const [cartItems, setCartItems] = useState(1);
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

    const avatarButton = isHomePage
      ? useTheme("Home", "avatarButtonTheme")
      : useTheme(theme, "avatarButtonTheme");

    const { cartIconFillColor, cartButtonColor } = isHomePage
      ? useTheme("Home", "cartButtonTheme")
      : useTheme(theme, "cartButtonTheme");

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
              {/* <Button ariaLabel="SignIn Button" className={`${buttonLColor} `}>
                SignIn
              </Button>
              <Button
                ariaLabel="Login Button"
                className={`ml-6 ${buttonRColor}`}
              >
                LogIn
              </Button> */}

              <Button
                className={`relative ${cartButtonColor}`}
                onClick={() => setCartItems(10)}
              >
                <span className="bg-red-600 rounded-full px-[8px] py-[2px] border-solid border-[1px] border-white  absolute text-sm top-[-12px] right-[-10px] text-white  ">
                  {cartItems}
                </span>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 107.54"
                  className="w-7 h-7"
                >
                  <title>Visit Cart</title>
                  <path
                    d="M3.93,7.86A3.93,3.93,0,0,1,3.93,0H14.15l.39,0A18.28,18.28,0,0,1,24.1,2.49a14.69,14.69,0,0,1,6.41,9.1c.32,1.41.66,2.82,1,4.23H119a3.92,3.92,0,0,1,3.93,3.92,4,4,0,0,1-.19,1.22L112.52,62.08a3.92,3.92,0,0,1-3.8,3H44.66c1.44,5.21,2.76,8,4.7,9.34,2.27,1.52,6.31,1.63,13,1.52h.07v0h45.17a3.93,3.93,0,1,1,0,7.86H62.46v0c-8.27.15-13.38-.09-17.46-2.84s-6.36-7.55-8.57-16.3l-13.51-51a7.19,7.19,0,0,0-3-4.49,10.8,10.8,0,0,0-5.51-1.3H3.93ZM96,88.34a9.6,9.6,0,1,1-9.6,9.6,9.6,9.6,0,0,1,9.6-9.6Zm-42.1,0a9.6,9.6,0,1,1-9.6,9.6,9.6,9.6,0,0,1,9.6-9.6ZM78,23.67V38h32.45l3.53-14.28Zm0,22.14V57.22h27.69l2.82-11.41ZM70.11,57.22V45.81H39.63q1.57,5.7,3,11.41Zm0-19.27V23.67H33.54c1.26,4.76,2.58,9.52,3.91,14.28Z"
                    fill={cartIconFillColor}
                  />
                </svg>
              </Button>

              <Button
                overRideBasicTheme="true"
                className={`ml-6 w-[55px] h-[55px] border-solid focus-visible:outline-none border-[2px] rounded-full ${avatarButton}`}
              >
                <img
                  src="/50994.jpg"
                  alt="avatar Image"
                  className="rounded-full"
                />
              </Button>
            </div>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Header;
