import React, { useState } from "react";

function Loading() {
  const [timer, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
  }, 10000);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-0">
      <img src="/loader.svg" alt="" className=" w-[200px] mt-[-250px]" />
      <p className="mt-10">Loading....</p>
      {timer && (
        <div className="mt-5">
          <h3 className="font-semibold text-xl">
            Error Connecting Servers try Again Later.....
          </h3>
        </div>
      )}
    </div>
  );
}

export default Loading;
