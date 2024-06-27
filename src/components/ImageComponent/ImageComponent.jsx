import React from "react";
import { ImageLoader } from "image-loader-spinner";
import useTheme from "../../hooks/useTheme";

function ImageComponent({ className = "", altText, id, type }) {
  ImageLoader("/pngegg.png", 200);
  const bgColor = useTheme(type, "bgcolor");
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={altText}
        className={`mx-auto p-6 z-50 ${className}`}
        spinner="true"
        fadein="true"
        style={{ backgroundColor: `${bgColor}` }}
      />
    </>
  );
}

export default ImageComponent;
