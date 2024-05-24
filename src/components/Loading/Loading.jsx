import React from "react";

function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-0">
      <img src="/loader.svg" alt="" className=" w-[200px] mt-[-250px]" />
      <p className="mt-10">Loading....</p>
    </div>
  );
}

export default Loading;
