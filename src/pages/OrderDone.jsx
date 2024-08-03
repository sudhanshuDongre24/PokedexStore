import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../store/cartSlice";

function OrderDone() {
  const [showPage, setShowPage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
      dispatch(addCartData({}));
    }, 2000);
  }, []);

  if (showPage) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <div className="border-[1px] border-solid border-[rgba(221,221,221,0.35)] rounded p-5 ">
          <h2 className="textColorLightGray">Order Done</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src="/loader.svg" className="w-[200px]" />
        <h2 className="text-center mt-5 text-xl textColorLightGray">
          Wait Order is on its way.....
        </h2>
      </div>
    );
  }
}

export default OrderDone;
