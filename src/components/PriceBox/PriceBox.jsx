import React from "react";

function PriceBox({ children, className = "" }) {
  return (
    <span
      className={`priceBox border-[0.0625rem] border-[rgb(221,221,221)] border-solid bg-[#ff90e8] text-black  ml-2 my-4 pl-1 pr-4 font-normal w-fit ${className}`}
    >
      {children}
    </span>
  );
}

export default PriceBox;
