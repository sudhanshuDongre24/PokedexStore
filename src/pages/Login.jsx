import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../components";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function clearField(e) {
    e.preventDefault();
    let emailElValue = document.getElementById("email")?.value;
    let passwordElValue = document.getElementById("password")?.value;
  }

  return (
    <div className="text-[rgb(221,221,221)]">
      <div>
        <h1 className="font-headingTop text-center text-5xl my-10">Pokedex</h1>

        <div className="sm:w-[500px] w-[320px] border-[2px] rounded-3xl border-solid  border-[rgba(221,221,221,0.35)] mx-auto p-5">
          <img
            id="image"
            src="/pngegg.png"
            alt="pokeball"
            className="w-[50px] mx-auto mt-4
          mb-4"
          />
          <h2 className="text-center text-2xl">Login</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 my-5"
          >
            <label htmlFor="email">Email</label>

            <Input
              id="email"
              label="email"
              type="email"
              placeholder="Enter your Email address..."
              className="mb-4 text-[rgb(36,36,35)] focus:border-[#ff90e8] border-[2px] border-solid focus:border-[3px] "
            />

            <label htmlFor="password" className="inline">
              Password
            </label>

            <Input
              id="password"
              label="password"
              type="password"
              placeholder="Enter your password...."
              className="mb-6  text-[rgb(36,36,35)] focus:border-[#ff90e8] border-[2px] border-solid focus:border-[3px]"
            />

            <Button className="bg-[#ff90e8] textColorDarkGray text-lg whiteShadow shadowAnimate hover:border-[rgba(36,36,35)]">
              Login
            </Button>
            <Button
              onClick={clearField}
              className="hover:bg-black hover:text-white hover:border-white whiteShadow shadowAnimate"
            >
              Clear
            </Button>
          </form>

          <div>
            <p className="text-center">
              Don't have an account?
              <span className="text-blue-500"> Register!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/* 


  return (
    <div className="text-[rgb(221,221,221)]">
      

      <div className="p-5 md:p-20 ">
        <h1 className="font-headingTop text-5xl text-center">PokeDex</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex justify-center flex-col border-[1px] border-[rgba(221,221,221,0.35)] mt-10 w-fit mx-auto p-5 rounded gap-3 "
        >
          <img
            src="/pngegg.png"
            alt=""
            className="w-[50px] h-[50px] mx-auto "
          />
          <h2 className="text-3xl text-center mb-10">Log In</h2>
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            label="email"
            type="email"
            placeholder="Enter your Email"
            register={register}
            required
            className="border-[2px] border-solid w-fit md:w-[500px] text-black rounded focus:border-[3px] text-xl"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 pl-3">⚠ Email is required</p>
          )}
          <label className="text-xl" htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            label="password"
            type="password"
            placeholder="Enter your Password"
            register={register}
            required
            className="border-[2px] border-solid w-fit md:w-[500px] text-black rounded focus:border-[3px] text-xl"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600 pl-3">⚠ Password is required</p>
          )}{" "}
          
          <div className="mt-5"></div>
          <Button type="submit">Sign In</Button>
          <Button onClick={clearField}>Clear</Button>
        </form>
      </div>
    </div>
  );
}

*/
