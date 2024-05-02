import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  const isLogin = true;

  function animate(e) {
    console.log(e);
    e.target.lastChild.classList.add("animate-ping");
    setTimeout(() => {
      e.target.lastChild.classList.remove("animate-ping");
    }, 1000);
  }
  return (
    <header className="fixed py-3 w-full bg-gray-500">
      <Container>
        <nav className="flex justify-between content-center">
          <div className="my-auto">
            <h1>Pokemon</h1>
          </div>
          <div className="relative">
            <Input className="w-[350px]" />
            <Button className="absolute bg-black top-0 right-0  ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
          <div className="flex gap-2">
            {isLogin ? (
              <>
                <Button
                  variant="outline"
                  className="relative"
                  onClick={animate}
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="bg-red-500 text-white rounded-full  absolute px-1 text-center top-[-12px] right-[-5px] ">
                    0
                  </h1>
                </Button>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <Button className="" variant="outline">
                  SignIn
                </Button>
                <Button>Login</Button>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
