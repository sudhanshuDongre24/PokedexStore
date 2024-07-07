import React from "react";

function PriceBox({
  children,
  className = "bg-[#ff90e8] text-black border-white",
}) {
  return (
    <span
      className={`priceBox border-2 border-solid ml-2 my-4 py-[3px] pl-1 pr-4 font-normal w-fit ${className}`}
    >
      {children}
    </span>
  );
}

export default PriceBox;
