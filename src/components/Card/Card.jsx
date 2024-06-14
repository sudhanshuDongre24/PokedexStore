import React, { Suspense, useEffect, useState } from "react";
import { ImageLoader } from "image-loader-spinner";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import PriceBox from "../PriceBox/PriceBox";

function Card({ id, name, type, speed }) {
  const navigate = useNavigate();
  ImageLoader("/pngegg.png", 200);
  return (
    <div
      className="border-[0.0625rem] rounded border-[rgba(221,221,221,1)] bg-black border-solid w-fit whiteShadow"
      onClick={() => navigate(`pokemon/${id}`)}
    >
      <div className="">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt=""
          className="w-[210px] mx-auto p-6 z-50"
          spinner="true"
          fadein="true"
        />
      </div>

      <hr className="border-[rgb(221,221,221)] border-[0.0625rem] border-solid" />

      <h2 className="text-lg mt-4 mb-2 pl-2">{name}</h2>
      <h3 className="pl-2 mb-2 text-lg ">{type.join(", ")}</h3>
      <span className="pl-1">⭐5.0 (150+)</span>
      <hr className=" border-[0.0625rem] mt-3  border-[rgba(221,221,221,0.35)] border-solid" />
      <PriceBox>${speed}</PriceBox>
    </div>
  );
}

export default Card;
