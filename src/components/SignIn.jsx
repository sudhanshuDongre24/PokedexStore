import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Header from "./Header";

function SignIn() {
  return (
    <>
      <div className="flex items-center min-h-screen flex-col justify-center">
        <div className="text-center  mb-12 pb-8 text-3xl">
          <h1>Pokemon</h1>
        </div>
        <div className=" flex border-2 py-10  flex-col mx-auto  rounded-3xl border-1 shadow-xl w-[400px]  gap-2 ">
          <div className="text-center">
            <h2 className="text-xl font-extrabold">Welcome Back</h2>
            <p className="text-slate-500">
              Please enter your details to login{" "}
            </p>
            <p className="text-red-600 font-bold">
              You Enter Incorrect Email or Password!!
            </p>
          </div>

          <div className="mx-6 mt-6 mb-1">
            <label className="font-bold" htmlFor="input">
              Email
            </label>
            <Input className=" w-full mt-2 rounded-xl" />
          </div>

          <div className="mx-6 mt-4">
            <div className="flex justify-between">
              <label className="font-bold" htmlFor="input">
                Password
              </label>
              <a href="" className="text-blue-600">
                Forget Password?
              </a>
            </div>
            <Input className=" w-full mt-2 rounded-xl" />
          </div>

          <div className="text-center mx-5">
            <Button
              size="lg"
              className="rounded-xl w-full bg-blue-800 mt-6 hover:bg-blue-900 text-lg focus-visible:ring-blue-900 "
            >
              Login In
            </Button>
          </div>

          <div className="text-center mt-2">
            <span>
              Don't have an account?
              <a href="" className="text-blue-600">
                {" "}
                Register
              </a>
            </span>
          </div>

          <div className="text-center">
            <span>
              <Button variant="link">Back to Home Page </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
