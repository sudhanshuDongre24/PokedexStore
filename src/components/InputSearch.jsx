import { useState } from "react";
import Input from "./Input";

function InputSearch({ width, className }) {
  document.addEventListener("click", (e) => {
    if (e.target.parentElement.id == "searchContainer") return;
    if (e.target.id == "searchContainer") return;
    document.getElementById("searchContainer").classList.add("hidden");
  });

  function clearInputField() {
    document.getElementById("inputSearchContainer").value = "";
  }

  function modalToggle(e) {
    if (e.target.value == "") {
      document.getElementById("searchContainer").classList.add("hidden");
    } else {
      document.getElementById("searchContainer").classList.remove("hidden");
    }
  }

  return (
    <div className="relative mt-0" onClick={modalToggle}>
      <Input
        id="inputSearchContainer"
        onChange={modalToggle}
        className="whiteShadow text-2xl"
      />
      <img
        className="w-8 absolute top-1 right-6"
        src="/icons/search.svg"
        alt="search Icon"
      />

      <div
        id="searchContainer"
        className="absolute whiteShadow pb-4 mt-3 border-2 hidden w-full bg-[rgba(29,29,29,0.9)] rounded border-[rgba(221,221,221,0.35)] animate-out "
      >
        <h1
          className="hover:bg-white py-2 mb-2
         hover:text-black"
        >
          Hello
        </h1>
        <hr />
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
      </div>
    </div>
  );
}

export default InputSearch;
