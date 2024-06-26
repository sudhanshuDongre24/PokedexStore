import React from "react";
import { Container, Button, Tooltip, PriceBox } from "../";

function ProductPageTopHeader({ name, speed }) {
  return (
    <header className="sticky z-[29] top-[114px] h-full py-2 border-b-[1px] border-black bg-white">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-8">
          <Tooltip position="right" text={`$ ${speed}`}>
            <PriceBox className="border-black border-[2px] py-[4px]">
              $ {speed}
            </PriceBox>
          </Tooltip>

          <h1 className=" mb-1 font-semibold  text-2xl">{name}</h1>
        </div>
        <div className="flex justify-between text-center items-center gap-2">
          <span>⭐⭐⭐⭐⭐ 7 rating</span>
          <Button className="hover:shadow-red-500 bg-[#ff90e8] border-black font-medium">
            Add to cart
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default ProductPageTopHeader;
