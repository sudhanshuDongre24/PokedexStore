import React, { useEffect, useRef, useState } from "react";
import { Container } from "..";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  let isHomePage;
  if (location.pathname.includes("/pokemon")) {
    isHomePage = false;
  } else {
    isHomePage = true;
  }

  return (
    <header
      className={`sticky top-0 border-solid border-b-[0.0625rem]    z-50 ${
        isHomePage
          ? "bg-[#242423] border-b-[rgba(221,221,221,0.35)]"
          : "bg-white border-b-[black]"
      }`}
    >
      <Container>
        <nav className="p-8 ">
          <h1
            className={` text-5xl font-extrabold ${
              isHomePage ? "text-[#dddddd]" : "text-black"
            }`}
            onClick={() => navigate("/")}
          >
            Pokemon
          </h1>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
