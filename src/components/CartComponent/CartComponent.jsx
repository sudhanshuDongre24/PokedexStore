import React, { useState } from "react";
import { Button, Container, ImageComponent } from "..";
import { useNavigate } from "react-router-dom";

function CartCard(cartItems) {
  const list = Object.values(cartItems);
  list.forEach((item) => {
    if ("itemsToBuy" in item) {
      return;
    }
    item.itemsToBuy = 1;
  });
  const [cartItemList, setCartItemList] = useState(list);

  const navigate = useNavigate();
  function changeUp(id) {
    let a = cartItemList.findIndex((item) => item.id == id);
    if (cartItemList[a].items <= cartItemList[a].itemsToBuy) return;
    cartItemList[a].itemsToBuy = cartItemList[a].itemsToBuy + 1;
    updateCartListItem();
  }

  function changeDown(id) {
    let a = cartItemList.findIndex((item) => item.id == id);
    if (cartItemList[a].itemsToBuy == 1) return;
    cartItemList[a].itemsToBuy = cartItemList[a].itemsToBuy - 1;
    updateCartListItem();
  }

  function removeCartItem(id) {
    const index = cartItemList.findIndex((obj) => obj.id == id);
    delete cartItemList[index].itemsToBuy;
    if (index !== -1) {
      cartItemList.splice(index, 1);
    }

    updateCartListItem();
  }

  function updateCartListItem() {
    setCartItemList([...cartItemList]);
  }

  if (cartItemList.length === 0) {
    return (
      <div className="textColorLightGray flex items-center flex-col gap-10 mt-10">
        <h2 className="text-3xl">Cart Is Empty</h2>
        <Button
          onClick={() => navigate("/")}
          className="hover:bg-black hover:text-white whiteShadow shadowAnimate active: "
        >
          Continue Shopping
        </Button>
      </div>
    );
  } else {
    return (
      <section className="mt-5 textColorLightGray ">
        <Container>
          <div className="flex gap-5 p-10 flex-col md:flex-row">
            <div className="flex-[2] border-[1px] border-solid border-rgba(221,221,221,0.35) rounded p-8 bg-black">
              <h2 className="text-center mb-10 text-3xl">Shopping Cart</h2>
              {cartItemList.map((cartItem) => (
                <div
                  key={cartItem.name}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center mb-10 pb-10 border-b-[1px] borderBottomLightGray  justify-between"
                >
                  <div className="flex-[3] md:flex-[2] ">
                    <ImageComponent
                      className="rounded-full border "
                      id={cartItem.id}
                      altText={`pokemon-name: ${cartItem.name},pokemon-id: ${cartItem.id}`}
                      type={cartItem.type}
                    />
                  </div>
                  <div className="flex-[2] pl-10 shrink">
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
                  <div className="flex flex-[1] flex-row sm:flex-col gap-2 items-center justify-between pt-2">
                    <Button
                      onClick={() => changeUp(cartItem.id)}
                      className="rounded-full px-0 py-0 w-10 h-10  whiteShadow shadowAnimate border-[1px] active:translate-x-[0] active:translate-y-0 active:shadow-none  m-2"
                    >
                      ⬆
                    </Button>
                    <span className="border-[1px] border-solid border-[rgba(221,221,221)] px-3">
                      {cartItem.itemsToBuy}
                    </span>
                    <Button
                      onClick={() => changeDown(cartItem.id)}
                      className="rounded-full px-0 py-0 w-10 h-10 whiteShadow shadowAnimate border-[1px] active:translate-x-0 active:translate-y-0 active:shadow-none m-2 text-center"
                    >
                      ⬇
                    </Button>
                    <Button
                      onClick={() => removeCartItem(cartItem.id)}
                      className="border-none hover:underline mt-1"
                    >
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
}

export default CartCard;
