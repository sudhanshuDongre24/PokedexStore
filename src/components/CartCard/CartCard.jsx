import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import { Container } from "../";

function CartCard(cartItems) {
  const cartItemList = Object.values(cartItems);
  console.log(cartItemList);

  function changeUp(id) {
    let a = cartItemList.findIndex((item) => item.id == id);
    cartItemList[a].hp = cartItemList[a].hp - 1;
    updateCartListItem();
  }

  function changeDown(id) {
    console.log(id);
  }

  function updateCartListItem() {
    console.log(cartItemList);
  }

  return (
    <section className="mt-5 textColorLightGray">
      <Container>
        <div className="flex gap-5 p-10">
          <div className="flex-[2] border-[1px] border-solid border-rgba(221,221,221,0.35) rounded">
            <h2 className="text-center mb-10">Cart Item</h2>
            {cartItemList?.map((item) => (
              <div key={item.name} className="flex gap-5">
                <h3>{item.name}</h3>
                <button className="border-2" onClick={() => changeUp(item.id)}>
                  Up
                </button>
                <button
                  className="border-2 ml-5"
                  onClick={() => changeDown(item.id)}
                >
                  Down
                </button>
              </div>
            ))}
          </div>
          <div className="flex-1 border-[1px] border-solid border-rgba(221,221,221,0.35) rounded">
            Proced
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CartCard;
