import React from "react";
import Container from "./Container";
import Button from "./Button";
import InputSearch from "./InputSearch";

function Header() {
  return (
    <header className="w-full p-9 bg-inherit  border-b-[rgba(221,221,221,0.35)]  border-solid border-b-[0.0625rem] sticky top-0 z-50">
      <Container>
        <nav className="flex justify-between flex-col sm:flex-row items-center z-10">
          {/* Logo Section */}
          <div className="flex items-center gap-[20px]  w-full justify-between sm:w-fit">
            <h1 className=" text-2xl sm:text-3xl ml-[-20px] sm:ml-0">
              POKEMON
            </h1>
            {/* Hidden Button Section */}
            <div className="block sm:hidden">
              <Button
                className="bg-white  text-black hover:bg-[#ff90e8]"
                onClick={() => console.log("clicked")}
              >
                login
              </Button>
            </div>
          </div>

          {/* InputSeacrch Section not working*/}
          {/*           <div className="">
            <InputSearch width="" />
          </div>
 */}
          {/* Button Section */}
          <div className="hidden sm:block">
            <Button
              className="hover:bg-black hover:text-white"
              onClick={() => console.log("clicked")}
            >
              Sign
            </Button>
            <Button
              className="bg-white ml-6 text-black hover:bg-[#ff90e8]"
              onClick={() => console.log("clicked")}
            >
              login
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

/* 
(
    <header className="w-full p-6 pb-8 border-b-[rgba(221,221,221,0.6)] border-b-[0.0625rem] bg-inherit sticky top-0 ">
      <Container className="w-full max-w-7xl mx-auto px-6">
        <div className="flex justify-between  items-center flex-col gap-5 sm:gap-2 sm:flex-row ">
          <div className="flex justify-between gap-12 w-full   sm:w-0 ">
            <h1 className="text-3xl font-extrabold">pokemon</h1>

            <div className="block sm:hidden h">
              <button>sign</button>
            </div>
          </div>
          {/* 
          <div>
            <InputSearch width="300px" />
          </div>

           Button Container 
          
          <div className="hidden sm:block">
            <Button className="bg-white" onClick={() => console.log("clicked")}>
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
*/
