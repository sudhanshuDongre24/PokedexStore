import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/searchSlice";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../../store/themeSlice";

function InputSearch({ showOverlay, setShowOverlay }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listItemRef = useRef([]);
  const [select, setSelect] = useState(-1);
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const selectSearch = useSelector((state) => state.pokemonSearch.search);
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
    if (e.key === "Escape") {
      setShowOverlay(false);
      setSelect(-1);
    }
  }

  return (
    <div className="relative text-white">
      <Input
        value={selectSearch}
        onChange={inputChange}
        onFocus={checkValue}
        onKeyDown={inputKeydownFunction}
        className="whiteShadow text-2xl w-full"
      />
      <img
        src="/search.svg"
        alt="searchIcon"
        className="absolute w-8 top-2 right-6"
      />

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
