import React, { Suspense } from "react";

function Card({ index }) {
  return (
    <div className="border-[0.0625rem] rounded border-[rgba(221,221,221,0.35)] bg-black border-solid w-fit">
      <Suspense fallback="loading.....">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
          alt=""
          className="bg-[rgb(221,221,221,0.35)] w-[200px]"
        />
      </Suspense>
      <hr className="border-[rgb(221,221,221)] border-[0.0625rem] border-solid" />
      <h2 className="text-lg mt-4 mb-5 pl-2">Bulbasaur</h2>
      <span className="pl-1">⭐5.0 (150+)</span>
      <hr className=" border-[0.0625rem] mt-3  border-[rgba(221,221,221,0.35)] border-solid" />

      <span className="priceBox border-[0.0625rem] border-[rgb(221,221,221)] border-solid bg-[#ff90e8] text-black  ml-2 my-4 pl-1 pr-4 font-normal w-fit">
        $50+
      </span>
    </div>
  );
}

export default Card;
