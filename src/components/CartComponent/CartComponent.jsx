import React, { useState } from "react";
import { Button, Container, ImageComponent } from "..";

function CartCard(cartItems) {
  const list = Object.values(cartItems);
  const [cartItemList, setCartItemList] = useState(list);

  function changeUp(id) {
    let a = cartItemList.findIndex((item) => item.id == id);
    cartItemList[a].items = cartItemList[a].items + 1;
    updateCartListItem();
  }

  function changeDown(id) {
    let a = cartItemList.findIndex((item) => item.id == id);
    cartItemList[a].items = cartItemList[a].items - 1;
    updateCartListItem();
  }

  function updateCartListItem() {
    setCartItemList([...cartItemList]);
  }

  return (
    <section className="mt-5 textColorLightGray ">
      <Container>
        <div className="flex gap-5 p-10">
          <div className="flex-[2] border-[1px] border-solid border-rgba(221,221,221,0.35) rounded p-8 bg-black">
            <h2 className="text-center mb-10 text-3xl">Shopping Cart</h2>
            {cartItemList.map((cartItem) => (
              <div
                key={cartItem.name}
                className="flex gap-5 items-center mb-10 pb-10 border-b-[1px] borderBottomLightGray  justify-between"
              >
                <div className="flex-[1]">
                  <ImageComponent
                    className="rounded-full border"
                    id={cartItem.id}
                    altText={`pokemon-name: ${cartItem.name},pokemon-id: ${cartItem.id}`}
                    type={cartItem.type}
                  />
                </div>
                <div className="flex-[2] pl-10">
                  <h2 className="text-2xl font-headingMedium italic mb-4">
                    {cartItem.name}
                  </h2>
                  <p>{cartItem.type.join(", ")}</p>
                  <span className="flex items-center gap-2 my-2">
                    <img
                      src="/pngegg.png"
                      alt="pokeball"
                      className="border-white border-solid border-[1px] rounded-full w-5 h-5 "
                    />
                    <p className="underline">pokemon</p>
                  </span>

                  <p className="text-red-500 mb-2">
                    Items left ⚠{" "}
                    <span className="font-extrabold">{cartItem.items}</span>
                  </p>

                  <div className="">
                    <p>
                      Product Value ${" "}
                      <span className="font-bold">{cartItem.speed}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1] flex-col gap-2 items-center justify-between pt-2">
                  <Button className="rounded-full px-0 py-0 w-10 h-10  whiteShadow shadowAnimate border-[1px] active:translate-x-[0] active:translate-y-0 active:shadow-none  m-2">
                    ⬆
                  </Button>
                  <span>1</span>
                  <Button className="rounded-full px-0 py-0 w-10 h-10 whiteShadow shadowAnimate border-[1px] active:translate-x-0 active:translate-y-0 active:shadow-none m-2">
                    ⬇
                  </Button>
                  <Button className="border-none hover:underline mt-1">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 border-[1px] border-solid border-rgba(221,221,221,0.35) rounded bg-black h-[200px]">
            Proced
            <h2>Hell0</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CartCard;
