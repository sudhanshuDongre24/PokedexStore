import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { changeTheme } from "../../store/themeSlice";

function InputSearch({ showOverlay, setShowOverlay }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const listItemRef = useRef([]);
  const [select, setSelect] = useState(-1);
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const selectSearch = useSelector((state) => state.pokemonSearch.search);
  const { theme } = useSelector((state) => state.pokemonTheme);
  const isHomePage = !location.pathname.includes("/pokemon");

  const inputSearchTheme = isHomePage
    ? useTheme("pokemon", "inputsearch")
    : useTheme(theme, "inputsearch");
  const inputSearchIconTheme = isHomePage
    ? useTheme("pokemon", "inputsearchicon")
    : useTheme(theme, "inputsearchicon");

  const inputSearchIcon = document.getElementById("searchIcon");

  if (inputSearchIcon) {
    inputSearchIcon.style.fill = inputSearchIconTheme;
  }

  const searchData = (pokemonData || [])
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(selectSearch.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);

  function inputChange(e) {
    setSelect(-1);
    dispatch(setSearch(e.target.value));
    if (e.target.value.length > 1) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }
  function searchPokemon({ id, type }) {
    navigate(`pokemon/${id}`);
    setShowOverlay(false);
    dispatch(setSearch(""));
    dispatch(changeTheme(type[0]));
  }
  function checkValue(e) {
    if (e.target.value !== "") {
      setShowOverlay(true);
      setSelect(-1);
    }
  }
  function inputKeydownFunction(e) {
    if (e.key === "Escape") {
      setShowOverlay(false);
      setSelect(-1);
    }
    // Empty Search
    if (searchData.length == 0) {
      return;
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
    if (e.key === "ArrowUp" && select > 0) {
      setSelect((prev) => prev - 1);
    }
    if (e.key == "ArrowDown" && select < searchData.length - 1) {
      setSelect((prev) => prev + 1);
    }

    if (e.key === "Enter") {
      const data = listItemRef.current[select];
      searchPokemon(data);
      setSelect(-1);
      setShowOverlay(false);
    }
  }

  return (
    <div className="relative text-white">
      <Input
        value={selectSearch}
        onChange={inputChange}
        onFocus={checkValue}
        onKeyDown={inputKeydownFunction}
        className={`text-2xl w-full ${inputSearchTheme}`}
      />

      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2 right-4"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          id="searchIcon"
          d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z"
          fill="#fff"
          className=""
        />
      </svg>

      {/* <img
        src="/search.svg"
        alt="searchIcon"
        id="searchIcon"
        className="absolute w-8 top-2 right-6 fill-white"
      /> */}

      {showOverlay && (
        <div className="absolute pb-4 border-2 rounded mt-3 w-full bg-[rgba(29,29,29,0.9)] border-[rgba(221,221,221,0.35)]">
          {searchData.length == 0 ? (
            <h1 className="text-center my-5">NO data found</h1>
          ) : (
            <ul>
              {searchData.map((data, index) => (
                <li
                  key={data.name}
                  id={index}
                  ref={() => (listItemRef.current[index] = data)}
                  onClick={() => {
                    searchPokemon(data);
                  }}
                  className={`py-3 px-3 hover:bg-white active:bg-white active:text-black  hover:text-black  ${
                    select === index ? "text-black bg-white" : ""
                  } `}
                >
                  {data.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default InputSearch;
