import React, { useState } from "react";
import Input from "../Input/Input";

function InputSearch() {
  const [showContainer, setShowContainer] = useState(false);

  return (
    <div className="relative text-white">
      <Input className="whiteShadow text-2xl w-full" />
      <img
        src="/search.svg"
        alt="searchIcon"
        className="absolute w-8 top-2 right-6"
      />

      {showContainer && (
        <div className="absolute pb-4 border-2 rounded mt-3 w-full bg-[rgba(29,29,29,0.9)] border-[rgba(221,221,221,0.35)]">
          <ul>
            <li
              onClick={(e) => console.log(e)}
              key="0"
              className={`py-2 hover:bg-white active:bg-white active:text-black  hover:text-black `}
            >
              Hello
            </li>

            <li key="1" className={`py-2 hover:bg-white hover:text-black `}>
              Hello
            </li>
            <li key="2" className={`py-2 hover:bg-white hover:text-black `}>
              Hello
            </li>
            <li key="3" className={`py-2 hover:bg-white hover:text-black `}>
              Hello
            </li>

            <li key="4" className={`py-2 hover:bg-white hover:text-black `}>
              Hello
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InputSearch;
