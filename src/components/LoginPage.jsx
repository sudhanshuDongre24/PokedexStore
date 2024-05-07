import React from "react";
import Input from "./Input";
import Button from "./Button";

function LoginPage() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col gap-5">
      {/* Logo */}
      <h1 className="text-white text-3xl">Pokemon</h1>

      <div className="border-solid mt-10 border-[0.0625rem] border-[rgba(221,221,221,0.35)] rounded w-fit px-10 pt-6  h-fit whiteShadow pb-6 ">
        <div className="text-center">
          <h1 className="text-2xl">Login</h1>
        </div>

        <div>
          {/* Top Section */}
          <div className="text-center mb-4 p-6">
            <h2 className="">Welcome Back</h2>
            <p>Please Enter you details</p>
            <p className="font-bold text-lg text-red-500">
              You Enter Incorrect Email or Password!
            </p>
          </div>

          {/* Input Section*/}
          <div className="flex flex-col gap-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your Email Address..."
              width="400px"
              className="whiteShadow focus:border-[#ffc900]"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your Password..."
              className="whiteShadow focus:border-[#ffc900]"
            />
          </div>

          <div className="mt-10">
            <Button className="w-[400px] bg-white hover:bg-[#ff90e8] text-black h-[45px] font-semibold ">
              LogIn
            </Button>
          </div>

          <div className="text-center mt-10 text-xl">
            <span>
              Don't have an account?{" "}
              <a className="text-blue-400 hover:text-blue-600">Register</a>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
