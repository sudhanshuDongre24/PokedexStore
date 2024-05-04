import React from "react";

function Card({}) {
  return (
    <div className="shadow-lg border-2 p-6 w-fit h-fit flex flex-col items-center">
      <div className="mx-auto w-full ">
        <img src="/public/images/logo.svg" alt="" className="" />
      </div>

      <div>
        <h1>Title</h1>
      </div>
    </div>
  );
}

export default Card;
