import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function SignUp() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        {/* App Logo Header */}
        <div
          className="text-center pb-8 mb-12
        text-3xl "
        >
          <h1>Pokemon</h1>
        </div>

        <div className=" flex border-2 py-10  flex-col mx-auto  rounded-3xl border-1 shadow-xl w-[400px]  gap-2 ">
          <div className="text-center">
            <h1 className="text-xl font-extrabold">Welcome</h1>
            <p className="text-slate-500">Please Enter You Details</p>
          </div>

          <div className="mx-6 mt-6 mb-1">
            <label className="font-bold" htmlFor="input">
              Username
            </label>
            <Input className=" w-full mt-2 rounded-xl" />
          </div>

          <div className="mx-6 mt-4">
            <div className="flex justify-between">
              <label className="font-bold" htmlFor="input">
                Email
              </label>
            </div>
            <Input type="email" className=" w-full mt-2 rounded-xl" />
          </div>

          <div className="mx-6 mt-4">
            <div className="flex justify-between">
              <label className="font-bold" htmlFor="input">
                Password
              </label>
            </div>
            <Input type="password" className=" w-full mt-2 rounded-xl" />
          </div>

          <div className="text-center mx-5">
            <Button
              size="lg"
              className="rounded-xl w-full bg-blue-800 mt-6 hover:bg-blue-900 text-lg focus-visible:ring-blue-900 "
            >
              SignUp
            </Button>
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

export default SignUp;
