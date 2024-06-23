import React, { useState } from "react";
import { Button, Container, InputSearch } from "..";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  let isHomePage = !location.pathname.includes("/pokemon");

  return (
    <header
      className={`sticky  top-0 border-solid border-b-[0.0625rem] z-30  ${
        isHomePage
          ? "bg-[#242423] border-b-[rgba(221,221,221,0.35)]"
          : "bg-white border-b-[black]"
      }`}
    >
      <Container>
        <nav className="p-8 flex flex-col gap-5 sm:flex-row items-center justify-between w-full  ">
          {/* Logo */}
          <h1
            className={` text-5xl cursor-pointer  font-extrabold ${
              isHomePage ? "text-[#dddddd]" : "text-black"
            }`}
            onClick={() => navigate("/")}
          >
            Pokemon
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
              className=" ml-6 bg-[rgb(221,221,221)] text-black hover:bg-[#ff90e8] "
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
