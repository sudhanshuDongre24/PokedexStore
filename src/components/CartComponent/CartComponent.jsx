import React, { useState } from "react";
import { Button, Container, ImageComponent } from "..";
import { redirect, useNavigate } from "react-router-dom";
import { addCartData } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonData } from "../../store/pokemonSlice";

function CartCard(cartItems) {
  const list = Object.values(cartItems);
  list.forEach((item) => {
    if ("itemsToBuy" in item) {
      return;
    }
    item.itemsToBuy = 1;
  });
  const [cartItemList, setCartItemList] = useState(list);
  const [showModal, setShowModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.pokemonData);
  const dataToUpdate = JSON.parse(JSON.stringify(data));

  function changeUp(id) {
    let a = cartItemList?.findIndex((item) => item.id == id);
    if (cartItemList[a].items <= cartItemList[a].itemsToBuy) return;
    cartItemList[a].itemsToBuy = cartItemList[a].itemsToBuy + 1;
    updateCartListItem();
  }

  function changeDown(id) {
    let a = cartItemList?.findIndex((item) => item.id == id);
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
    updatePokemonCart();
  }

  function updateCartListItem() {
    setCartItemList([...cartItemList]);
  }

  function removeAllCartItems() {
    setCartItemList([]);
    dispatch(addCartData({}));
  }

  function updatePokemonCart() {
    const cart = {};
    cartItemList?.map((item) => (cart[item.id] = item.name));
    dispatch(addCartData({ ...cart }));
  }

  function procedToBuy() {
    const pokemonId = cartItemList.map((item) => item.id);
    pokemonId.forEach((id, index) => {
      dataToUpdate[id - 1].items -= cartItemList[index].itemsToBuy;
    });
    dispatch(addPokemonData([...dataToUpdate]));
    setCartItemList([]);
    setTimeout(() => {
      navigate("/");
    }, 1000);
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
            <div className="flex-1 border-[1px] border-solid border-rgba(221,221,221,0.35) rounded bg-black h-fit p-5">
              <h2 className="text-2xl mt-5 text-center">Bill Counter</h2>

              <div className="grid grid-cols-4 justify-center p-4 mt-2">
                <h3 className="font-bold text-center">Name</h3>
                <h3 className="font-bold  text-center">Price</h3>
                <h3 className="font-bold  text-center">Quantity</h3>
                <h3 className="font-bold  text-center">Total</h3>
              </div>

              {cartItemList?.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-4 justify-center p-4 my-2"
                >
                  <p className="text-center">{item.name}</p>
                  <p className="text-center">{item.speed}</p>
                  <p className="text-center">{item.itemsToBuy}</p>
                  <p className="text-center">{item.speed * item.itemsToBuy}</p>
                </div>
              ))}

              <hr className="mx-5" />

              <div className="px-10 my-4 flex justify-between">
                <p className="font-bold font-xl">Total:</p>
                <h3 className="italic">
                  {" "}
                  $
                  {cartItemList?.reduce(
                    (sum, item) => sum + item.speed * item.itemsToBuy,
                    0
                  )}
                </h3>
              </div>
              <hr className="mx-5" />

              <div className="mt-4">
                <Button
                  onClick={() => {
                    procedToBuy();
                  }}
                  className="w-full  whiteShadow shadowAnimate bg-[rgb(255,144,232)] textColorDarkGray"
                >
                  Buy
                </Button>
                <Button
                  onClick={() => setShowModal(true)}
                  className="w-full my-5 whiteShadow shadowAnimate"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Container>
        {showModal && (
          <div
            className="h-[100vh] absolute  top-0 bottom-0 z-[5000] bg-[rgba(0,0,0,0.9)] w-full flex items-center justify-center "
            onClick={() => setShowModal(false)}
          >
            <div className="border-[1px] border-[rgba(221,221,221,0.35)] bg-[rgb(36,36,35)] textColorLightGray w-fit flex  flex-col rounded p-10 ">
              <h3 className="text-xl">
                <span className="text-red-500">⚠</span> Are you sure you want to
                remove all items from the cart!
              </h3>
              <div className="mt-6 flex gap-4 justify-end">
                <Button className="whiteShadow shadowAnimate">Cancel</Button>
                <Button
                  onClick={() => removeAllCartItems()}
                  className="whiteShadow shadowAnimate bg-[rgb(255,144,232)] textColorDarkGray"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default CartCard;
