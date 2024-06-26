import React from "react";
import { ImageLoader } from "image-loader-spinner";

function ImageComponent({ className = "", altText, id }) {
  ImageLoader("/pngegg.png", 200);
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt={altText}
      className={`mx-auto p-6 z-50 bg-white ${className}`}
      spinner="true"
      fadein="true"
    />
  );
}

export default ImageComponent;
