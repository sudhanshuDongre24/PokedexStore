import React, { useEffect, useRef, useState } from "react";
import { Button, Container, InputSearch } from "..";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showContainer, setShowContainer] = useState(false);
  let isHomePage;
  if (location.pathname.includes("/pokemon")) {
    isHomePage = false;
  } else {
    isHomePage = true;
  }

  function closeDialogBox() {}

  return (
    <header
      className={`sticky  top-0 border-solid border-b-[0.0625rem] z-30  ${
        isHomePage
          ? "bg-[#242423] border-b-[rgba(221,221,221,0.35)]"
          : "bg-white border-b-[black]"
      }`}
    >
      <Container>
        <nav className="p-8 flex items-center justify-between w-full  ">
          {/* Logo */}
          <h1
            className={` text-5xl cursor-pointer  font-extrabold ${
              isHomePage ? "text-[#dddddd]" : "text-black"
            }`}
            onClick={() => navigate("/")}
          >
            Pokemon
          </h1>

          {showContainer && (
            <div
              id="overlay"
              className="bg-black absolute top-0 w-full left-0 h-screen z-[5] "
              onClick={() => setShowContainer(false)}
            ></div>
          )}

          {/* Input field */}
          <div className="w-full mx-4 z-50">
            <InputSearch
              setShowContainer={setShowContainer}
              showContainer={showContainer}
            />
          </div>

          {/* Button Section */}
          <div className="ml-2 flex items-center justify-center w-fit-content">
            <Button className=" text-[#dddddd] hover:bg-black hover:text-white">
              SignIn
            </Button>
            <Button className=" ml-6 bg-[rgb(221,221,221)] text-black hover:bg-[#ff90e8] ">
              LogIn
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
