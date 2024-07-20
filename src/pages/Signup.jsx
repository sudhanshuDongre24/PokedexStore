import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  function clearField(e) {
    e.preventDefault();
    let emailEl = document.getElementById("email");
    let passwordEl = document.getElementById("password");
    let usernameEl = document.getElementById("username");
    emailEl.value = passwordEl.value = usernameEl.value = "";
  }

  function passwordVisible(e) {
    e.preventDefault();
    const passwordEl = document.getElementById("password");
    passwordEl.type === "password"
      ? (passwordEl.type = "text")
      : (passwordEl.type = "password");
  }

  return (
    <div className="text-[rgb(221,221,221)] flex overflow-hidden h-[100vh]">
      <div className="flex-[1] overflow-y-scroll ">
        <h1
          onClick={() => navigate("/")}
          className="font-headingTop text-center text-5xl my-10 cursor-pointer"
        >
          Pokedex
        </h1>

        <div className="sm:w-[500px] w-[320px] border-[2px] rounded-3xl border-solid  border-[rgba(221,221,221,0.35)] mx-auto p-5">
          <img
            id="image"
            src="/pngegg.png"
            alt="pokeball"
            className="w-[50px] mx-auto mt-4
          mb-4"
          />
          <h2 className="text-center text-2xl">SignUp</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 my-5 relative"
          >
            <label htmlFor="usernmae">Username</label>
            <Input
              id="username"
              className="mb-1 text-[rgb(36,36,35)] focus:border-[#ff90e8] border-[2px] border-solid focus:border-[3px]"
              type="text"
              label="username"
              placeholder="Enter your username..."
              register={register}
              required
            />
            {errors.username?.type === "required" && (
              <p className="text-red-600 pl-3 mb-3">⚠ Username is required</p>
            )}

            <label htmlFor="email">Email</label>

            <Input
              onFocus={(e) => e.preventDefault()}
              id="email"
              label="email"
              type="email"
              placeholder="Enter your Email address..."
              register={register}
              required
              className="mb-1 text-[rgb(36,36,35)] focus:border-[#ff90e8] border-[2px] border-solid focus:border-[3px] "
              validate={{
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "⚠ Email address must be a valid address",
              }}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 pl-3">⚠ Email is required</p>
            )}
            {errors.email?.type === "matchPatern" && (
              <p className="text-red-600 pl-3">{errors?.email?.message}</p>
            )}

            <label htmlFor="password" className="mt-4">
              Password
            </label>

            <Input
              id="password"
              label="password"
              type="password"
              placeholder="Enter your password...."
              register={register}
              required
              minLength="8"
              maxLength="24"
              className="mb-1  text-[rgb(36,36,35)] focus:border-[#ff90e8] border-[2px] border-solid focus:border-[3px]"
            />
            <a
              className="absolute top-[58%] bg-black rounded-full  left-[94%] "
              onClick={passwordVisible}
            >
              👁
            </a>
            {errors.password?.type === "required" && (
              <p className="text-red-600 pl-3">⚠ Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 pl-3">
                ⚠ Length Should be greater than 8 Character
              </p>
            )}

            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="bg-[#ff90e8] textColorDarkGray text-lg whiteShadow shadowAnimate hover:border-[rgba(36,36,35)] mt-6"
            >
              Sigup
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
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className="text-blue-500 hover:text-blue-800 hover:cursor-pointer"
              >
                {" "}
                Login!
              </span>
            </p>

            <p
              onClick={() => navigate("/")}
              className="text-center mt-4 hover:underline hover:cursor-pointer hover:scale-110"
            >
              ⬅ Back to Home
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1] hidden lg:block">
        <img src="/pngegg.png" alt="" className="h-[100vh] bg-cover" />
      </div>
    </div>
  );
}

export default Signup;
