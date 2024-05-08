import React from "react";
import { Container } from "..";

function Header() {
  return (
    <header className="sticky top-0 border-solid border-b-[0.0625rem]  border-b-[rgba(221,221,221,0.35)] bg-[#242423] z-50 ">
      <Container>
        <nav className="p-8 ">
          <h1 className="text-[#dddddd] text-3xl ">Pokemon</h1>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
