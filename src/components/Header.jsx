import React from "react";
import Container from "./Container";
import Button from "./Button";

function Header() {
  return (
    <header className="w-full  p-6 pb-8 border-b-white border-b-[1px] bg-red-500 fixed ">
      <Container className="w-full max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center flex-col gap-5 sm:gap-2 sm:flex-row ">
          <div className="flex justify-between gap-12 w-full   sm:w-0 ">
            <h1>pokemon</h1>
            <div className="block sm:hidden">
              <button>sign</button>
            </div>
          </div>

          <div>
            <input type="text" />
          </div>

          <div className="hidden sm:block">
            <Button color="white" onClick={() => console.log("clicked")}>
              Sign
            </Button>
            <Button color="black" onClick={() => console.log("clicked")}>
              login
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
