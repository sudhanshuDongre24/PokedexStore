import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageComponent, PriceBox, Tooltip } from "../";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/themeSlice";

function Card({ id, name, type, speed }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="border-[0.0625rem] rounded border-[rgba(221,221,221,1)] bg-black border-solid w-fit whiteShadow"
      onClick={() => {
        navigate(`pokemon/${id}`);
        dispatch(changeTheme(type[0]));
      }}
    >
      <div className="">
        <ImageComponent
          className="w-[210px]"
          id={id}
          altText={`pokemon-name: ${name},pokemon-id: ${id}`}
          type={type}
        />
      </div>

      <hr className="border-[rgb(221,221,221)] border-[0.0625rem] border-solid" />

      <h2 className=" font-headingMedium italic font-medium text-xl  mt-4 mb-2 pl-2">
        {name}
      </h2>
      <h3 className="pl-2 mb-2 text-lg ">{type.join(", ")}</h3>
      <div className="pl-2 flex items-center gap-2 justify-start mb-2 ">
        <img
          className=" h-5 w-[6] border-white border-solid border-[1px] rounded-full "
          src="/pngegg.png"
          alt="Pokmonball image as the sell of pokemon"
        />
        <p className="underline">Pokemon</p>
      </div>
      <span className="pl-1">⭐5.0 (150+)</span>
      <hr className=" border-[0.0625rem] mt-3  border-[rgba(221,221,221,0.35)] border-solid" />
      <Tooltip
        position="right"
        text={`$${speed}`}
        className="bg-white text-black"
      >
        <PriceBox>${speed}</PriceBox>
      </Tooltip>
    </div>
  );
}

export default Card;
